import React from "react";
import { Movie } from "../../typings";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <section className="relative flex-shrink-0 cursor-pointer hover:scale-105 transition ease-out duration-200 hover:drop-shadow-lg">
      <div className="inset-0 absolute bottom-0 bg-gradient-to-b from-gray-200/0 z-10 to-gray-300 dark:to-[#1a1c29] via-gray-900/10" />
      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-gray-900 rounded-sm drop-shadow-xl shadow-md"
        width={1920}
        height={1000}
        alt={movie.title}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
      />
    </section>
  );
}

export default MovieCard;
