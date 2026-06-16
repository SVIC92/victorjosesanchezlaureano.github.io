import type { APIRoute } from 'astro';
import { buildAuthorizeUrl } from '../../../lib/auth';

export const prerender = false;

export const GET: APIRoute = ({ url, cookies, redirect }) => {
  // state anti-CSRF
  const state = crypto.randomUUID();
  cookies.set('oauth_state', state, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: 600, // 10 min
  });

  const redirectUri = `${url.origin}/api/auth/callback`;
  return redirect(buildAuthorizeUrl(state, redirectUri));
};
