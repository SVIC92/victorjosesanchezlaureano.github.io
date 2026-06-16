import { b as buildAuthorizeUrl } from '../../../chunks/auth_CEwhmx8j.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = ({ url, cookies, redirect }) => {
  const state = crypto.randomUUID();
  cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600
    // 10 min
  });
  const redirectUri = `${url.origin}/api/auth/callback`;
  return redirect(buildAuthorizeUrl(state, redirectUri));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
