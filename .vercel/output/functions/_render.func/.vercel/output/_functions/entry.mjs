import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-4XjmmW.mjs';
import { manifest } from './manifest_D7oMEzIY.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/admin/certification.astro.mjs');
const _page3 = () => import('./pages/api/admin/experience.astro.mjs');
const _page4 = () => import('./pages/api/admin/profile.astro.mjs');
const _page5 = () => import('./pages/api/admin/project.astro.mjs');
const _page6 = () => import('./pages/api/admin/skill.astro.mjs');
const _page7 = () => import('./pages/api/auth/callback.astro.mjs');
const _page8 = () => import('./pages/api/auth/login.astro.mjs');
const _page9 = () => import('./pages/api/auth/logout.astro.mjs');
const _page10 = () => import('./pages/certificacion/_id_.astro.mjs');
const _page11 = () => import('./pages/proyecto/_id_.astro.mjs');
const _page12 = () => import('./pages/proyectos.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/index.astro", _page1],
    ["src/pages/api/admin/certification.ts", _page2],
    ["src/pages/api/admin/experience.ts", _page3],
    ["src/pages/api/admin/profile.ts", _page4],
    ["src/pages/api/admin/project.ts", _page5],
    ["src/pages/api/admin/skill.ts", _page6],
    ["src/pages/api/auth/callback.ts", _page7],
    ["src/pages/api/auth/login.ts", _page8],
    ["src/pages/api/auth/logout.ts", _page9],
    ["src/pages/certificacion/[id].astro", _page10],
    ["src/pages/proyecto/[id].astro", _page11],
    ["src/pages/proyectos.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "fa350abb-1a20-4d35-a766-fc61910b2ba6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
