import { SearchResults } from "../../typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const res = await fetch(url, options);
  const data = (await res.json()) as SearchResults;
  return data;
}

export async function getUpComingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  keywords && url.searchParams.set("keywords", keywords);
  id && url.searchParams.set("with_genres", id);
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  term && url.searchParams.set("query", term);
  const data = await fetchFromTMDB(url);
  return data.results;
}
