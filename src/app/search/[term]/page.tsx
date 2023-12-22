import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
async function Search({ params: { term } }: Props) {
  if (!term) {
    notFound();
  }
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popular = await getPopularMovies();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-6xl font-bold">Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popular} />
      </div>
    </div>
  );
}

export default Search;
