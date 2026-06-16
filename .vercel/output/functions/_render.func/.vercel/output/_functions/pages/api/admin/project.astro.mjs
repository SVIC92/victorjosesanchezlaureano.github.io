import { l as deleteProject, m as updateProject, n as createProject } from '../../../chunks/db_D2SWBXuo.mjs';
import { s as str, i as intOr, l as lines } from '../../../chunks/forms_CJ30kzfe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, "_action");
  const id = parseInt(str(form, "id"), 10);
  if (action === "delete") {
    if (!Number.isNaN(id)) await deleteProject(id);
    return redirect("/admin#proyectos");
  }
  const data = {
    title: str(form, "title"),
    summary: str(form, "summary"),
    cover: str(form, "cover"),
    gallery: lines(form, "gallery"),
    description: str(form, "description"),
    features: lines(form, "features"),
    tech: lines(form, "tech"),
    repo: str(form, "repo"),
    demo: str(form, "demo"),
    sort_order: intOr(form, "sort_order")
  };
  if (action === "update" && !Number.isNaN(id)) await updateProject(id, data);
  else await createProject(data);
  return redirect("/admin#proyectos");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
