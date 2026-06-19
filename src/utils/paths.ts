const base = import.meta.env.BASE_URL;

export function sitePath(path = "") {
  const root = base.endsWith("/") ? base : `${base}/`;
  const clean = path.replace(/^\/+/, "");
  return `${root}${clean}`;
}
