import Loader from "../Loader";
import { useMangaData } from "../../fetchData/useAnimeData";
import InfiniteScroll from "../ReuseableComp/InfiniteScroll";
const MangaInfiniteScroll = () => {
  const {
    data,
    isLoading,
    isFetching,
    isFetched,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useMangaData(1, 16);

  if (isLoading) return <Loader />;

  const manga = data?.pages;

  return (
    <>
      <InfiniteScroll
        data={manga}
        fetchNextPage={() => fetchNextPage()}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isLoading}
        isFetched={isFetched}
      />
    </>
  );
};

export default MangaInfiniteScroll;
