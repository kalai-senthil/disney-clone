import { cn } from "@/lib/utils";
import { Movie } from "../../typings";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};
function MoviesCarousel({ movies, isVertical = false, title = "" }: Props) {
  return (
    <section className="z-50">
      <h2 className="pl-10 font-bold">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-auto px-5 py-5 scrollbar-hide lg:px-10",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard key={movie.id} movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}

export default MoviesCarousel;
