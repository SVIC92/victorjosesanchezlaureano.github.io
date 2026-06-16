import { h as deleteExperience, i as updateExperience, j as createExperience } from '../../../chunks/db_D2SWBXuo.mjs';
import { s as str, i as intOr, l as lines } from '../../../chunks/forms_CJ30kzfe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, "_action");
  const id = parseInt(str(form, "id"), 10);
  if (action === "delete") {
    if (!Number.isNaN(id)) await deleteExperience(id);
    return redirect("/admin#experiencia");
  }
  const data = {
    role: str(form, "role"),
    company: str(form, "company"),
    location: str(form, "location"),
    period: str(form, "period"),
    tasks: lines(form, "tasks"),
    tags: lines(form, "tags"),
    sort_order: intOr(form, "sort_order")
  };
  if (action === "update" && !Number.isNaN(id)) await updateExperience(id, data);
  else await createExperience(data);
  return redirect("/admin#experiencia");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
