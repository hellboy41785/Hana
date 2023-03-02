import { useAnimeData } from "../../fetchData/useAnimeData";
import GridComp from "../ReuseableComp/GridComp";
import Link from "next/link";
import Loader from "../Loader";

const NextAiring = () => {
  const currentMonth = (new Date().getMonth() + 1 + 1) 
  let season;

  if (currentMonth >= 12 || currentMonth <= 3) {
    season = "WINTER";
  } else if (currentMonth >= 3 && currentMonth <= 5) {
    season = "SPRING";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = "SUMMER";
  } else {
    season = "FALL";
  }
  const currentYear = new Date().getFullYear();
  console.log(currentMonth)
  console.log(new Date().getMonth())
  const { data, isLoading, isFetching, isFetched } = useAnimeData(
    season,
    currentYear,
    1,
    8
  );
  if (isLoading || isFetching) return <Loader />;

  const nextAiring = data.pages[0].data.Page.media;

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="text-3xl">Next Airing</h1>
        <Link href={`/anime/SPRING`}>
          <h1 className="cursor-pointer hover:text-yellow-400">View All</h1>
        </Link>
      </div>
      <GridComp type={nextAiring} name="Next Airing" isFetched={isFetched} />
    </div>
  );
};

export default NextAiring;
