const base = import.meta.env.BASE_URL;

export function sitePath(path = "") {
  const clean = path.replace(/^\/+/, "");
  return `${base}${clean}`;
}
