import Loader from "../Loader";
import { useAnimeData } from "../../fetchData/useAnimeData";
import InfiniteScroll from "../ReuseableComp/InfiniteScroll";
const AnimeInfiniteScroll = ({ season, year }) => {
  const {
    data,
    isLoading,
    isFetching,
    isFetched,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useAnimeData(season, year, 1, 16);

  if (isLoading || isFetching) return <Loader />;

  const anime = data.pages;

  return (
    <>
      <InfiniteScroll
        data={anime}
        fetchNextPage={() => fetchNextPage()}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isLoading}
        isFetched={isFetched}
      />
    </>
  );
};

export default AnimeInfiniteScroll;
