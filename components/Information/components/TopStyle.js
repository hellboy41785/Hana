import { format } from "date-fns";
import Timer from "./Timer";
import SaveToList from "../../SaveToList/SaveToList";
import { useCheckListQuery } from "../../../fetchData/useAddQuery";
import { useAnimeStore } from "../../../fetchData/useAnimeStore";
import Cookies from "js-cookie";

const TopStyle = ({ info }) => {
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
    <div className="w-full h-full font-mono ">
      <div className="relative ">
        <img
          className="object-cover w-full max-h-64 blur-sm hover:blur-0"
          src={info.bannerImage === null ? "https://wallpapercave.com/wp/wp5734635.jpg" : info.bannerImage}
          alt="bannerImage"
        />
      </div>
      <div className="relative ">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-2 md:justify-start md:items-start">
          <div className="relative w-1/3 -inset-y-11 md:w-1/6 ">
            <img
              className="rounded-md"
              src={info.coverImage.extraLarge}
              alt="coverImage"
            />
            <div className="absolute bottom-0 w-full p-1 ">
              <SaveToList info={info} myInfo={myList === undefined ? null : myList} />
            </div>
          </div>
          {/* info */}
          <div className="flex flex-col-reverse w-full gap-3 lg:flex-row lg:justify-between">
            <div className="text-xs font-bold md:text-lg">
              <h1 className="">
                {info.title.english === null
                  ? info.title.romaji
                  : info.title.english}
              </h1>
              <h1 className="">{info.status}</h1>
              <h1 className="">Type : {info.type}</h1>
              <h1 className="">Format : {info.format}</h1>
              <h1 className="">Source : {info.source}</h1>
              <h1 className="">
                Total {info.type === "ANIME" ? "Episodes" : "Chapters"} :{" "}
                {info.type === "ANIME"
                  ? info.episodes === null
                    ? "??"
                    : info.episodes
                  : info.chapters === null
                  ? "??"
                  : info.chapters}
              </h1>
              <h1 className="">Rating : {info.averageScore / 10}</h1>
              <h1 className="">
                Started Date :{" "}
                {format(
                  new Date(
                    info.startDate.year,
                    info.startDate.month - 1,
                    info.startDate.day
                  ),
                  "d MMM yyyy"
                )}{" "}
                / Ended Date :{" "}
                {info.endDate.month === null
                  ? "??"
                  : format(
                      new Date(
                        info.endDate.year,
                        info.endDate.month - 1,
                        info.endDate.day
                      ),
                      "d MMM yyyy"
                    )}
              </h1>
            </div>

            {/* Timer */}
            {info.airingSchedule.nodes.length !== 0 && (
              <Timer airingSchedule={info.airingSchedule} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStyle;
