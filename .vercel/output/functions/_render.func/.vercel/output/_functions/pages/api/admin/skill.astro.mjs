import { o as deleteSkill, p as updateSkill, q as createSkill } from '../../../chunks/db_D2SWBXuo.mjs';
import { s as str, i as intOr, a as intOrNull, b as levelOrNull } from '../../../chunks/forms_CJ30kzfe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, "_action");
  const id = parseInt(str(form, "id"), 10);
  if (action === "delete") {
    if (!Number.isNaN(id)) await deleteSkill(id);
    return redirect("/admin#habilidades");
  }
  const data = {
    name: str(form, "name"),
    icon: str(form, "icon"),
    category: str(form, "category") || "herramientas",
    level: levelOrNull(form, "level"),
    bar: intOrNull(form, "bar"),
    sort_order: intOr(form, "sort_order")
  };
  if (action === "update" && !Number.isNaN(id)) await updateSkill(id, data);
  else await createSkill(data);
  return redirect("/admin#habilidades");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
