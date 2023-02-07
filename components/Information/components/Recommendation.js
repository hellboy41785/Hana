import Link from "next/link";
import GridComp from "../../ReuseableComp/GridComp";
import SaveToList from "../../SaveToList/SaveToList";

const Recommendation = ({ info }) => {
  return (
    <>
      <h1 className="text-2xl">Recommendation</h1>

      <div className="flex overflow-clip overflow-x-scroll scrollbar-w-1 scrollbar-thumb-gray-500  scrollbar-thumb-rounded-lg  gap-3 font-mono w-full cursor-pointer">
        {info.recommendations.edges.map((rec) => {
          const anime = rec.node.mediaRecommendation;
          return (
            <div
              className=" relative min-w-[150px] max-w-[150px] p-1"
              key={anime.id}
            >
              <Link href={`${anime.type}/${anime.id}`} shallow={true}>
                <div className="relative w-full h-full ">
                  <img
                    src={anime.coverImage.extraLarge}
                    className="object-cover min-w-full min-h-full rounded-md"
                  />
                </div>
                <div className="absolute flex flex-col justify-between  inset-0  p-2 opacity-0 hover:opacity-95 hover:bg-black">
                  <div className="space-y-2 text-white">
                    {/* Title */}
                    <div>
                      <h1 className="font-mono text-sm text-white text-ellipsis  max-h-6 truncate ">
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
                      <h1 className="bg-[#0092ca] p-1 rounded-sm">
                        {anime.type}
                      </h1>
                      {anime.format !== anime.type && (
                        <h1 className="bg-[#0092ca] p-1 rounded-sm">
                          {anime.format}
                        </h1>
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
                  </div>
                </div>
              </Link>
              <div className=" w-full absolute bottom-0 p-1">
                <SaveToList info={anime} myInfo={null} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recommendation;
