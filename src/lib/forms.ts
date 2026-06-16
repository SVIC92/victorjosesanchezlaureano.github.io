// Utilidades para leer datos de formularios del panel /admin.

export function str(form: FormData, key: string): string {
  return (form.get(key) ?? '').toString().trim();
}

export function intOrNull(form: FormData, key: string): number | null {
  const v = str(form, key);
  if (v === '') return null;
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? null : n;
}

export function intOr(form: FormData, key: string, fallback = 0): number {
  const n = intOrNull(form, key);
  return n === null ? fallback : n;
}

// Convierte un textarea (un elemento por línea) en array de strings.
export function lines(form: FormData, key: string): string[] {
  return str(form, key)
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

// nivel: solo valores válidos o null
export function levelOrNull(form: FormData, key: string): string | null {
  const v = str(form, key);
  return ['avanzado', 'intermedio', 'basico'].includes(v) ? v : null;
}
