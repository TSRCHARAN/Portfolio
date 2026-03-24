// Client-side helper that calls the backend Notion import endpoint.
// NOTE: Notion block -> Markdown conversion must happen on the server (requires Notion API token or OAuth).

export default async function importNotionPage(notionUrl, categoryId = null) {
  // Simple client wrapper for POST /api/import/notion
  // The backend should validate the URL, fetch Notion blocks, convert to markdown/html,
  // download and reupload images to storage, create/save a blog record in the DB, and
  // return a JSON response.

  const res = await fetch('/api/import/notion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: notionUrl, category_id: categoryId })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Notion import failed')
  }

  return res.json()
}
