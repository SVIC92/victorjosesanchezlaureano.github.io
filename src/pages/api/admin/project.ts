import type { APIRoute } from 'astro';
import { createProject, updateProject, deleteProject } from '../../../lib/db';
import { str, intOr, lines } from '../../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = str(form, '_action');
  const id = parseInt(str(form, 'id'), 10);

  if (action === 'delete') {
    if (!Number.isNaN(id)) await deleteProject(id);
    return redirect('/admin#proyectos');
  }

  const data = {
    title: str(form, 'title'),
    summary: str(form, 'summary'),
    cover: str(form, 'cover'),
    gallery: lines(form, 'gallery'),
    description: str(form, 'description'),
    features: lines(form, 'features'),
    tech: lines(form, 'tech'),
    repo: str(form, 'repo'),
    demo: str(form, 'demo'),
    sort_order: intOr(form, 'sort_order'),
  };

  if (action === 'update' && !Number.isNaN(id)) await updateProject(id, data);
  else await createProject(data);

  return redirect('/admin#proyectos');
};
