import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: { id: string };
  searchParams: { genre: string };
};
async function Genre({ searchParams: { genre }, params: { id } }: Props) {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="max-w-7xl ma-auto">
      <div className="px-10 text-6xl font-bold">Genre {genre}</div>
      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  );
}

export default Genre;
