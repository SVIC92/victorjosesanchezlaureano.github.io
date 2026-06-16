import type { APIRoute } from 'astro';
import {
  exchangeCodeForToken,
  fetchGithubUser,
  isOwner,
  createSessionToken,
  setSessionCookie,
} from '../../../lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const savedState = cookies.get('oauth_state')?.value;
  cookies.delete('oauth_state', { path: '/' });

  if (!code || !state || !savedState || state !== savedState) {
    return new Response('Estado OAuth inválido. Intenta iniciar sesión de nuevo.', { status: 400 });
  }

  const redirectUri = `${url.origin}/api/auth/callback`;
  const token = await exchangeCodeForToken(code, redirectUri);
  if (!token) return new Response('No se pudo obtener el token de GitHub.', { status: 401 });

  const user = await fetchGithubUser(token);
  if (!user) return new Response('No se pudo leer tu perfil de GitHub.', { status: 401 });

  if (!isOwner(user.login)) {
    return new Response(
      `Acceso denegado. La cuenta @${user.login} no está autorizada para administrar este portafolio.`,
      { status: 403 },
    );
  }

  const session = await createSessionToken({ login: user.login, name: user.name, avatar: user.avatar });
  setSessionCookie(cookies, session);
  return redirect('/admin');
};
