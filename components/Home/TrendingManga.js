import { useMangaData } from "../../fetchData/useAnimeData";
import GridComp from "../ReuseableComp/GridComp";
import Link from "next/link";
import Loader from "../Loader";
const TrendingManga = () => {
  const { data, isLoading,isFetching,isFetched} = useMangaData(1,8);
  if (isLoading) return <Loader/>;
  const trendingManga = data.pages[0].data.Page.media;
   
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="text-3xl">Trending Manga</h1>
        <Link href={`/manga/trendingmanga`}>
          <h1 className="hover:text-yellow-400 cursor-pointer">View All</h1>
        </Link>
      </div>
      <GridComp type={trendingManga} name="Trending Manga" isFetched={isFetched}/>
    </div>
  );
};

export default TrendingManga;
