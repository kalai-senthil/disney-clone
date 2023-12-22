import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpComingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-x-2">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming Movies" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated Movies" />
        <MoviesCarousel movies={popularMovies} title="Popular Movies" />
      </div>
    </main>
  );
}
