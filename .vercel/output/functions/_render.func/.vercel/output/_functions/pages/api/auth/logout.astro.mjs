import { a as clearSessionCookie } from '../../../chunks/auth_CEwhmx8j.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = ({ cookies, redirect }) => {
  clearSessionCookie(cookies);
  return redirect("/");
};
const GET = ({ cookies, redirect }) => {
  clearSessionCookie(cookies);
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
