import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(imagePath?: string, full?: boolean) {
  return imagePath
    ? `https://image.tmdb.org/t/p/${full ? "original" : "w500"}/${imagePath}`
    : "";
}
