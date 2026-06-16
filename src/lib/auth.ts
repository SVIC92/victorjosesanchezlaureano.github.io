import { SignJWT, jwtVerify } from 'jose';
import type { AstroCookies } from 'astro';

export const SESSION_COOKIE = 'pf_session';
const DAY = 60 * 60 * 24;
const SESSION_MAX_AGE = 7 * DAY; // 7 días

function env(name: string): string | undefined {
  return process.env[name] ?? (import.meta.env as Record<string, string>)[name];
}

function secretKey(): Uint8Array {
  const secret = env('AUTH_SECRET');
  if (!secret) throw new Error('Falta AUTH_SECRET en el entorno.');
  return new TextEncoder().encode(secret);
}

export interface SessionData {
  login: string;
  name: string;
  avatar?: string;
}

// ---------- Sesión (JWT en cookie httpOnly) ----------
export async function createSessionToken(data: SessionData): Promise<string> {
  return await new SignJWT({ ...data })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secretKey());
}

export async function verifySessionToken(token: string): Promise<SessionData | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return { login: String(payload.login), name: String(payload.name), avatar: payload.avatar as string | undefined };
  } catch {
    return null;
  }
}

export function setSessionCookie(cookies: AstroCookies, token: string) {
  cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
}

export function clearSessionCookie(cookies: AstroCookies) {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}

export async function getSession(cookies: AstroCookies): Promise<SessionData | null> {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return await verifySessionToken(token);
}

// Solo el dueño (tu usuario de GitHub) puede administrar.
export function isOwner(login: string | undefined | null): boolean {
  const allowed = env('ALLOWED_GITHUB_LOGIN');
  if (!allowed) return false;
  return !!login && login.toLowerCase() === allowed.toLowerCase();
}

// ---------- OAuth de GitHub (flujo manual con fetch) ----------
export function getClientId(): string {
  const id = env('GITHUB_CLIENT_ID');
  if (!id) throw new Error('Falta GITHUB_CLIENT_ID en el entorno.');
  return id;
}

export function buildAuthorizeUrl(state: string, redirectUri: string): string {
  const params = new URLSearchParams({
    client_id: getClientId(),
    redirect_uri: redirectUri,
    scope: 'read:user',
    state,
    allow_signup: 'false',
  });
  return `https://github.com/login/oauth/authorize?${params.toString()}`;
}

export async function exchangeCodeForToken(code: string, redirectUri: string): Promise<string | null> {
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: getClientId(),
      client_secret: env('GITHUB_CLIENT_SECRET'),
      code,
      redirect_uri: redirectUri,
    }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

export async function fetchGithubUser(token: string): Promise<{ login: string; name: string; avatar: string } | null> {
  const res = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'portafolio-vjsl', Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) return null;
  const u = (await res.json()) as { login: string; name?: string; avatar_url?: string };
  return { login: u.login, name: u.name || u.login, avatar: u.avatar_url || '' };
}
