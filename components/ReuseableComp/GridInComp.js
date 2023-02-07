import Link from "next/link";
import SaveToList from "../SaveToList/SaveToList";
import Cookies from "js-cookie";
const GridInComp = ({ type, isFetched }) => {
  const anime = type.media;

  return (
    <div key={anime.id} id={anime.id} className="relative font-mono">
      <Link href={`/${anime.type}/${anime.id}`} shallow={true}>
        <div className="relative w-full h-full ">
          <img
            src={anime.coverImage.extraLarge}
            className="object-cover min-w-full min-h-full rounded-md"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 hover:opacity-95 hover:bg-black">
          <div className="space-y-2 text-white">
            {/* Title */}
            <div>
              <h1 className="font-mono text-sm text-white truncate text-ellipsis max-h-6 ">
                {anime.title.english === null
                  ? anime.title.romaji
                  : anime.title.english}
              </h1>
            </div>

            {/* Status */}
            {anime.studios.nodes.length !== 0 && (
              <h1 className="bg-[#42b883] p-1 rounded-sm text-xs text-center truncate">
                {anime.studios?.nodes[0].name}
              </h1>
            )}
            {/* Types and Format */}
            <div className="flex gap-1 text-xs">
              <h1 className="bg-[#0092ca] p-1 rounded-sm">{anime.type}</h1>
              {anime.format !== anime.type && (
                <h1 className="bg-[#0092ca] p-1 rounded-sm">{anime.format}</h1>
              )}
              {anime.episodes !== null && (
                <h1 className="bg-[#0092ca] p-1 rounded-sm">
                  EP:{anime.episodes}
                </h1>
              )}
            </div>
            {/* Rating */}
            <div className="flex gap-1">
              {anime.meanScore !== null && (
                <h1 className="bg-[#f95959] p-1 rounded-sm text-xs text-center">
                  {anime.meanScore / 10}
                </h1>
              )}
              <h1 className="bg-[#f95959] p-1 rounded-sm text-xs text-center">
                {anime.status}
              </h1>
            </div>
            <div>
              {type.status === "CURRENT" && (
                <h1 className="bg-[#24527a] p-1 rounded-sm text-xs text-center">
                  Progress : {type.progress}
                </h1>
              )}
            </div>
          </div>
        </div>
      </Link>
      {Cookies.get("token") && isFetched && (
        <div className="absolute bottom-0 w-full p-1 ">
          <SaveToList info={anime} myInfo={type} />
        </div>
      )}
    </div>
  );
};

export default GridInComp;
