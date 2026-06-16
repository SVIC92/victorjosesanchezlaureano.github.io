function str(form, key) {
  return (form.get(key) ?? "").toString().trim();
}
function intOrNull(form, key) {
  const v = str(form, key);
  if (v === "") return null;
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? null : n;
}
function intOr(form, key, fallback = 0) {
  const n = intOrNull(form, key);
  return n === null ? fallback : n;
}
function lines(form, key) {
  return str(form, key).split(/\r?\n/).map((s) => s.trim()).filter((s) => s.length > 0);
}
function levelOrNull(form, key) {
  const v = str(form, key);
  return ["avanzado", "intermedio", "basico"].includes(v) ? v : null;
}

export { intOrNull as a, levelOrNull as b, intOr as i, lines as l, str as s };
