import React from "react";
import { Genres } from "../../typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownCircle } from "lucide-react";
import Link from "next/link";
async function GenreDropDown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const res = await fetch(url, options);
  const data = (await res.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        Genre <ChevronDownCircle />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropDown;
