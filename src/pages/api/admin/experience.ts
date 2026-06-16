import type { APIRoute } from 'astro';
import { createExperience, updateExperience, deleteExperience } from '../../../lib/db';
import { str, intOr, lines } from '../../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, '_action');
  const id = parseInt(str(form, 'id'), 10);

  if (action === 'delete') {
    if (!Number.isNaN(id)) await deleteExperience(id);
    return redirect('/admin#experiencia');
  }

  const data = {
    role: str(form, 'role'),
    company: str(form, 'company'),
    location: str(form, 'location'),
    period: str(form, 'period'),
    tasks: lines(form, 'tasks'),
    tags: lines(form, 'tags'),
    sort_order: intOr(form, 'sort_order'),
  };

  if (action === 'update' && !Number.isNaN(id)) await updateExperience(id, data);
  else await createExperience(data);

  return redirect('/admin#experiencia');
};
