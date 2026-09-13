// Placeholder for any future server-backed features (e.g. account sync,
// higher file-size limits). All current tools run entirely client-side
// and do not call this module.

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json()
}
