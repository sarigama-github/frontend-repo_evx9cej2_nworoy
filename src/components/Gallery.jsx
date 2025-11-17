import GameCard from "./GameCard";

export default function Gallery({ games }) {
  if (!games?.length) {
    return (
      <div className="text-center text-gray-500 py-16">No games found. Try a different search.</div>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
