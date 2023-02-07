import { useAnimeData } from "../../fetchData/useAnimeData";
import GridComp from "../ReuseableComp/GridComp";
import Link from "next/link";
import Loader from "../Loader";

const Airing = ({}) => {
  const currentMonth = new Date().getMonth() + 1;
  let season;

  if (currentMonth >= 12 || currentMonth <= 2) {
    season = "WINTER";
  } else if (currentMonth >= 3 && currentMonth <= 5) {
    season = "SPRING";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = "SUMMER";
  } else {
    season = "FALL";
  }
  const currentYear = new Date().getFullYear();

  const { data, isLoading, isFetching, isFetched } = useAnimeData(
    season,
    currentYear,
    1,
    8
  );
  if (isLoading) return <Loader />;

  const airing = data.pages[0].data.Page.media;

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="text-3xl">Currently Airing</h1>
        <Link href={`/anime/WINTER`}>
          <h1 className="cursor-pointer hover:text-yellow-400">View All</h1>
        </Link>
      </div>
      <GridComp type={airing} name="Currently Airing" isFetched={!isFetching} />
    </div>
  );
};

export default Airing;
