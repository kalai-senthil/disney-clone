import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

async function CarouselBannerWrapper({
  id,
  keywords,
}: {
  id?: string;
  keywords?: string;
}) {
  const data = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={data} />;
}

export default CarouselBannerWrapper;
