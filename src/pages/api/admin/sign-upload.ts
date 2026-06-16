import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

export const prerender = false;

function env(name: string): string | undefined {
  return process.env[name] ?? (import.meta.env as Record<string, string>)[name];
}

// Devuelve una firma para subir UN archivo directo a Cloudinary desde el navegador.
// El api_secret nunca se expone: solo se usa aquí para firmar. Protegido por el middleware /api/admin.
export const GET: APIRoute = () => {
  const cloudName = env('CLOUDINARY_CLOUD_NAME');
  const apiKey = env('CLOUDINARY_API_KEY');
  const apiSecret = env('CLOUDINARY_API_SECRET');

  if (!cloudName || !apiKey || !apiSecret) {
    return new Response(
      JSON.stringify({ error: 'Faltan variables de Cloudinary (CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET).' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'portafolio';

  // Cloudinary firma los parámetros ordenados alfabéticamente: folder, timestamp.
  const toSign = `folder=${folder}&timestamp=${timestamp}`;
  const signature = crypto.createHash('sha1').update(toSign + apiSecret).digest('hex');

  return new Response(
    JSON.stringify({ cloudName, apiKey, timestamp, folder, signature }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
