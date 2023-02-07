import GridInComp from "../ReuseableComp/GridInComp";
import { useMyListQuery } from "../../fetchData/useMyListQuery";
import { useTypeStore } from "../../fetchData/useAnimeStore";
import Loader from "../Loader";

const Entries = ({ mylist }) => {
  const type = useTypeStore((state) => state.type);
  const { data, isLoading, isFetching, isFetched } = useMyListQuery(
    mylist[0],
    mylist[1],
    mylist[2]
  );
  if (isLoading || isFetching) return <Loader />;

  const myLists = data.data.MediaListCollection.lists;
  return (
    <div className=" gap-3 p-2">
      {myLists.map((list) => (
        <div key={list.name}>
          {list.isCustomList === false && (
            <div className="grid grid-cols-3 gap-4 mt-5 sm:grid-cols-4 md:grid-cols-8">
              {list.entries.map((el) => (
                <GridInComp type={el} isFetched={isFetched} key={el.id} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Entries;
