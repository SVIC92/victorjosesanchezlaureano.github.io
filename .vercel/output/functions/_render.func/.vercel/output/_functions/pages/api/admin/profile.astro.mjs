import { k as updateProfile } from '../../../chunks/db_D2SWBXuo.mjs';
import { s as str } from '../../../chunks/forms_CJ30kzfe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  await updateProfile({
    name: str(form, "name"),
    role: str(form, "role"),
    summary: str(form, "summary"),
    avatar_url: str(form, "avatar_url"),
    email: str(form, "email"),
    linkedin_url: str(form, "linkedin_url"),
    linkedin_label: str(form, "linkedin_label"),
    github_url: str(form, "github_url"),
    github_label: str(form, "github_label")
  });
  return redirect("/admin#perfil");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
