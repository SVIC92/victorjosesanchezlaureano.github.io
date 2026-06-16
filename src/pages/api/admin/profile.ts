import type { APIRoute } from 'astro';
import { updateProfile } from '../../../lib/db';
import { str } from '../../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  await updateProfile({
    name: str(form, 'name'),
    role: str(form, 'role'),
    summary: str(form, 'summary'),
    avatar_url: str(form, 'avatar_url'),
    email: str(form, 'email'),
    linkedin_url: str(form, 'linkedin_url'),
    linkedin_label: str(form, 'linkedin_label'),
    github_url: str(form, 'github_url'),
    github_label: str(form, 'github_label'),
  });
  return redirect('/admin#perfil');
};
