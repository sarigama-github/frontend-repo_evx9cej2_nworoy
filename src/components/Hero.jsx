import { Search } from "lucide-react";

export default function Hero({ query, setQuery, onSearch }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 shadow-xl">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_40%),radial-gradient(circle_at_80%_0%,#fff,transparent_35%),radial-gradient(circle_at_40%_80%,#fff,transparent_45%)]" />
      <div className="relative">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Find and Download Awesome Games</h1>
        <p className="mt-3 md:mt-4 text-white/90 max-w-2xl">Browse a curated library of PC games. Search by title or genre and start your download in one click.</p>
        <div className="mt-6 flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-2">
          <Search className="w-5 h-5 ml-2 text-white/90" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Search games, e.g., racing, RPG, space..."
            className="flex-1 bg-transparent outline-none placeholder:text-white/70 text-white px-3 py-2"
          />
          <button onClick={onSearch} className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:opacity-95 active:scale-[.98] transition">Search</button>
        </div>
      </div>
    </div>
  );
}
