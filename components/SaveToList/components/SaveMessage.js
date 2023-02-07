import { useMyListData } from "../../../fetchData/useAnimeStore";
import { useEffect } from "react";

const SaveMessage = () => {
  const myData = useMyListData((state) => state.myData);
  console.log(myData)

  return (
    <div className="z-20 fixed top-5 flex justify-center w-full">
      <h1 className="bg-green-600 p-2 rounded-full text-xs">Added {myData.name}</h1>
    </div>
  );
};

export default SaveMessage;
