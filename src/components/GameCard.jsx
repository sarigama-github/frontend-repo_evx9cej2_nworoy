import { Download } from "lucide-react";

export default function GameCard({ game }) {
  return (
    <div className="group rounded-xl bg-white shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {game.thumbnail && (
        <img src={game.thumbnail} alt={game.title} className="h-40 w-full object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{game.title}</h3>
          {game.size_gb && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{game.size_gb} GB</span>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{game.description}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          {game.genre && <span className="px-2 py-1 rounded bg-indigo-50 text-indigo-600 font-medium">{game.genre}</span>}
          {game.platform && <span className="px-2 py-1 rounded bg-gray-50 text-gray-600">{game.platform}</span>}
        </div>
        <a
          href={game.download_url || '#'}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 active:scale-[.98] transition"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </div>
  );
}
