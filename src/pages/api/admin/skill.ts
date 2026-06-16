import type { APIRoute } from 'astro';
import { createSkill, updateSkill, deleteSkill } from '../../../lib/db';
import { str, intOr, intOrNull, levelOrNull } from '../../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, '_action');
  const id = parseInt(str(form, 'id'), 10);

  if (action === 'delete') {
    if (!Number.isNaN(id)) await deleteSkill(id);
    return redirect('/admin#habilidades');
  }

  const data = {
    name: str(form, 'name'),
    icon: str(form, 'icon'),
    category: str(form, 'category') || 'herramientas',
    level: levelOrNull(form, 'level'),
    bar: intOrNull(form, 'bar'),
    sort_order: intOr(form, 'sort_order'),
  };

  if (action === 'update' && !Number.isNaN(id)) await updateSkill(id, data);
  else await createSkill(data);

  return redirect('/admin#habilidades');
};
