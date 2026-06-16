import { SignJWT, jwtVerify } from 'jose';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const SESSION_COOKIE = "pf_session";
const DAY = 60 * 60 * 24;
const SESSION_MAX_AGE = 7 * DAY;
function env(name) {
  return process.env[name] ?? Object.assign(__vite_import_meta_env__, { GITHUB_CLIENT_ID: "Ov23lieDpBx4Imgr9YAt", GITHUB_CLIENT_SECRET: "dd2fba53b4ce9c9ed6a66aebe7c9f9180c6bf656", ALLOWED_GITHUB_LOGIN: "SVIC92", AUTH_SECRET: "1905baa0184270785b0dae5d66c901e2c9feb9db8d9447c9fd758e86cacb65b2ceca968d7ffcd552853c1f69fab651d7", OS: process.env.OS, _: process.env._ })[name];
}
function secretKey() {
  const secret = env("AUTH_SECRET");
  if (!secret) throw new Error("Falta AUTH_SECRET en el entorno.");
  return new TextEncoder().encode(secret);
}
async function createSessionToken(data) {
  return await new SignJWT({ ...data }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(`${SESSION_MAX_AGE}s`).sign(secretKey());
}
async function verifySessionToken(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return { login: String(payload.login), name: String(payload.name), avatar: payload.avatar };
  } catch {
    return null;
  }
}
function setSessionCookie(cookies, token) {
  cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: Object.assign(__vite_import_meta_env__, { GITHUB_CLIENT_ID: "Ov23lieDpBx4Imgr9YAt", GITHUB_CLIENT_SECRET: "dd2fba53b4ce9c9ed6a66aebe7c9f9180c6bf656", ALLOWED_GITHUB_LOGIN: "SVIC92", AUTH_SECRET: "1905baa0184270785b0dae5d66c901e2c9feb9db8d9447c9fd758e86cacb65b2ceca968d7ffcd552853c1f69fab651d7", OS: process.env.OS, _: process.env._ }).PROD,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE
  });
}
function clearSessionCookie(cookies) {
  cookies.delete(SESSION_COOKIE, { path: "/" });
}
async function getSession(cookies) {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return await verifySessionToken(token);
}
function isOwner(login) {
  const allowed = env("ALLOWED_GITHUB_LOGIN");
  if (!allowed) return false;
  return !!login && login.toLowerCase() === allowed.toLowerCase();
}
function getClientId() {
  const id = env("GITHUB_CLIENT_ID");
  if (!id) throw new Error("Falta GITHUB_CLIENT_ID en el entorno.");
  return id;
}
function buildAuthorizeUrl(state, redirectUri) {
  const params = new URLSearchParams({
    client_id: getClientId(),
    redirect_uri: redirectUri,
    scope: "read:user",
    state,
    allow_signup: "false"
  });
  return `https://github.com/login/oauth/authorize?${params.toString()}`;
}
async function exchangeCodeForToken(code, redirectUri) {
  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: getClientId(),
      client_secret: env("GITHUB_CLIENT_SECRET"),
      code,
      redirect_uri: redirectUri
    })
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token ?? null;
}
async function fetchGithubUser(token) {
  const res = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${token}`, "User-Agent": "portafolio-vjsl", Accept: "application/vnd.github+json" }
  });
  if (!res.ok) return null;
  const u = await res.json();
  return { login: u.login, name: u.name || u.login, avatar: u.avatar_url || "" };
}

export { clearSessionCookie as a, buildAuthorizeUrl as b, createSessionToken as c, exchangeCodeForToken as e, fetchGithubUser as f, getSession as g, isOwner as i, setSessionCookie as s };
