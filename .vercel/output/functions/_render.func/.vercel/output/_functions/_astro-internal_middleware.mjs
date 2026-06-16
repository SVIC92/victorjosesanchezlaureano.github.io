import { d as defineMiddleware, s as sequence } from './chunks/render-context_p8ijBx5F.mjs';
import { g as getSession, i as isOwner } from './chunks/auth_CEwhmx8j.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C-VnLc7H.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdminPage = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminApi = pathname.startsWith("/api/admin");
  if (isAdminPage || isAdminApi) {
    const session = await getSession(context.cookies);
    const allowed = session && isOwner(session.login);
    if (!allowed) {
      if (isAdminApi) {
        return new Response(JSON.stringify({ error: "No autorizado" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }
        });
      }
      return context.redirect("/api/auth/login");
    }
    context.locals.session = session;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
