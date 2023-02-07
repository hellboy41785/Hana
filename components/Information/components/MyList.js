import SaveToList from "../../SaveToList/SaveToList";
import { useCheckListQuery } from "../../../fetchData/useAddQuery";
import { useAnimeStore } from "../../../fetchData/useAnimeStore";
import Cookies from "js-cookie";
import Loader from "../../Loader"


const MyList = ({info}) => {
  const userId = useAnimeStore((state) => state.userId);
  const myId = userId.data?.Viewer.id;
  const token = Cookies.get("token");

  const { data, isLoading } = useCheckListQuery({
    token: token,
    userId: myId,
    mediaId: info.id,
  });

  if (isLoading) return <></>;
  const myList = data.data.Page?.mediaList[0];
  return (
    <>
      <SaveToList info={info} myInfo={myList === undefined ? null : myList} />
    </>
  );
};

export default MyList;
