import { defineMiddleware } from 'astro:middleware';
import { getSession, isOwner } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdminPage = pathname === '/admin' || pathname.startsWith('/admin/');
  const isAdminApi = pathname.startsWith('/api/admin');

  if (isAdminPage || isAdminApi) {
    const session = await getSession(context.cookies);
    const allowed = session && isOwner(session.login);

    if (!allowed) {
      if (isAdminApi) {
        return new Response(JSON.stringify({ error: 'No autorizado' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      // Página de admin sin sesión válida → al login
      return context.redirect('/api/auth/login');
    }

    // Disponible para las páginas/endpoints protegidos
    context.locals.session = session;
  }

  return next();
});
