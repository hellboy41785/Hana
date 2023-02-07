import { useState } from "react";
import { useAddQuery } from "../../fetchData/useAddQuery";
import Cookies from "js-cookie";
import { useMyListData } from "../../fetchData/useAnimeStore";
import { BsPlus, BsFillPlayFill } from "react-icons/bs";
import { AiFillCalendar, AiTwotoneEdit } from "react-icons/ai";

const SaveToList = ({ info, myInfo }) => {
  const setMyData = useMyListData((state) => state.setMyData);
  const setUpdateData = useMyListData((state) => state.setUpdateData);

  const mediaID = info.id;
  const token = Cookies.get("token");
  const [status, setStatus] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const { mutate } = useAddQuery();

  const handleUpdate = (value) => {
    setStatus(value);
    setIsHovered(true);
  };

  const handleSubmit = (value) => {
    mutate({ token: token, mediaId: mediaID, status: value });
    setMyData(
      info.title.english === null ? info.title.romaji : info.title.english,
      value,
      true
    );
  };

  return (
    <div className="w-full space-y-1 ">
      {isHovered && (
        <h1 className="bg-[#1d2025] text-xs flex justify-center p-1 rounded-full ">
          Add to {status}
        </h1>
      )}

      <div className="w-10 dropdown dropdown-hover dropdown-right ">
        <label tabIndex={0} className="">
          {myInfo === null ? (
            <BsPlus
              className="text-3xl bg-[#1d2025] rounded-full cursor-pointer"
              onClick={() => {
                setUpdateData({
                  newTitle: info.title,
                  newMediaId: mediaID,
                  newStatus: "CURRENT",
                  newInitial: true,
                  newProgress: 0,
                  newScore: 0,
                  newEpisodes:
                    info.type === "ANIME" ? info.episodes : info.chapters,
                });
              }}
            />
          ) : (
            <AiTwotoneEdit
              className="text-3xl p-1 bg-[#1d2025] rounded-full cursor-pointer"
              onClick={() => {
                setUpdateData({
                  newTitle: info.title,
                  newMediaId: mediaID,
                  newStatus: myInfo.status,
                  newInitial: true,
                  newProgress: myInfo.progress,
                  newScore: myInfo.score,
                  newEpisodes:
                    info.type === "ANIME" ? info.episodes : info.chapters,
                });
              }}
            />
          )}
        </label>
        <ul tabIndex={0} className="flex dropdown-content ">
          <li className="w-10">
            <BsFillPlayFill
              className="text-3xl hover:text-green-400 bg-[#1d2025] rounded-full  cursor-pointer"
              onMouseEnter={() => handleUpdate("Current")}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleSubmit("CURRENT")}
            />
          </li>
          <li>
            <AiFillCalendar
              className="text-3xl bg-[#1d2025] rounded-full p-1 cursor-pointer hover:text-orange-400"
              onMouseEnter={() => handleUpdate("Planning")}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleSubmit("PLANNING")}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SaveToList;
