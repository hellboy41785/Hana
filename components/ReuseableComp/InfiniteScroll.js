import GridComp from "./GridComp";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../Loader";
const InfiniteScroll = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isFetched,
}) => {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);



  return (
    <div className="flex flex-col p-3">
      {data.map((group, i) => {
        const data = group.data.Page.media;
        return (
          <div key={i}>
            <GridComp type={data} isFetched={isFetched} />
          </div>
        );
      })}
      <div className="font-mono text-2xl text-center p-y-8" ref={ref}>
        {isFetchingNextPage && hasNextPage ? <Loader /> : "No more Result"}
      </div>
    </div>
  );
};

export default InfiniteScroll;
