// The newest release of each project, read from GitHub when the site is
// built. A failed read falls back to the last known tag rather than
// failing the build: the page should still say something true-ish, and
// the next deploy refreshes it.
const FALLBACK: Record<string, string> = {
  "openquanter/openquanter": "2.0.0",
  "openquanter/quanterdeck": "1.0.0",
};

const cache = new Map<string, Promise<string>>();

export function latest(repo: string): Promise<string> {
  let p = cache.get(repo);
  if (!p) {
    p = fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "openquanter.com-build" },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((j: { tag_name?: string }) => (j.tag_name ?? "").replace(/^v/, "") || FALLBACK[repo])
      .catch(() => FALLBACK[repo]);
    cache.set(repo, p);
  }
  return p;
}
