"use client";
import { Movie } from "../../typings";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
Autoplay.globalOptions = { delay: 1000 };
type Props = {
  movies: Movie[];
};
function CarouselBanner({ movies }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: false, duration: 1000 }, [
    Autoplay(),
  ]);
  return (
    <div ref={emblaRef} className="overflow-hidden relative cursor-pointer">
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Image
              alt={movie.title}
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              width={1920}
              height={1000}
            />
            <div className="hidden md:inline absolute mt-0 top-0 bg-transparent bg-gradient-to-r w-full h-full p-10 space-y-2 text-white from-gray-900/90 via-transparent to-transparent">
              <h2 className="text-5xl font-bold max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
    </div>
  );
}

export default CarouselBanner;
