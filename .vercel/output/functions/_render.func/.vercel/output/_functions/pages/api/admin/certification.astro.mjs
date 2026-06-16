import { e as deleteCertification, u as updateCertification, f as createCertification } from '../../../chunks/db_D2SWBXuo.mjs';
import { s as str, i as intOr, l as lines } from '../../../chunks/forms_CJ30kzfe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, "_action");
  const id = parseInt(str(form, "id"), 10);
  if (action === "delete") {
    if (!Number.isNaN(id)) await deleteCertification(id);
    return redirect("/admin#certificaciones");
  }
  const data = {
    titulo: str(form, "titulo"),
    mini: str(form, "mini"),
    pdf: str(form, "pdf"),
    resumen: str(form, "resumen"),
    descripcion: lines(form, "descripcion"),
    sort_order: intOr(form, "sort_order")
  };
  if (action === "update" && !Number.isNaN(id)) await updateCertification(id, data);
  else await createCertification(data);
  return redirect("/admin#certificaciones");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
