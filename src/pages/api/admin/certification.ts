import type { APIRoute } from 'astro';
import { createCertification, updateCertification, deleteCertification } from '../../../lib/db';
import { str, intOr, lines } from '../../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, '_action');
  const id = parseInt(str(form, 'id'), 10);

  if (action === 'delete') {
    if (!Number.isNaN(id)) await deleteCertification(id);
    return redirect('/admin#certificaciones');
  }

  const data = {
    titulo: str(form, 'titulo'),
    mini: str(form, 'mini'),
    pdf: str(form, 'pdf'),
    resumen: str(form, 'resumen'),
    descripcion: lines(form, 'descripcion'),
    sort_order: intOr(form, 'sort_order'),
  };

  if (action === 'update' && !Number.isNaN(id)) await updateCertification(id, data);
  else await createCertification(data);

  return redirect('/admin#certificaciones');
};
