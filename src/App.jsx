import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [query, setQuery] = useState('')
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadSample() {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`${API_BASE}/api/games/sample`)
      if (!res.ok) throw new Error('Failed to load sample games')
      const data = await res.json()
      setGames(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function search() {
    try {
      setLoading(true)
      setError('')
      const url = new URL(`${API_BASE}/api/games`)
      if (query.trim()) url.searchParams.set('q', query.trim())
      const res = await fetch(url)
      if (!res.ok) throw new Error('Search failed')
      const data = await res.json()
      setGames(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSample()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <Hero query={query} setQuery={setQuery} onSearch={search} />
        {error && <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">{error}</div>}
        {loading ? (
          <div className="animate-pulse text-gray-500 text-center py-16">Loading...</div>
        ) : (
          <Gallery games={games} />
        )}
        <footer className="text-center text-gray-500 text-sm pt-6">For demo purposes only. Links are placeholders.</footer>
      </div>
    </div>
  )
}

export default App
