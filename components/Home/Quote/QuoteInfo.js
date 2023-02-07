import { useQuoteInfo } from "../../../fetchData/useQuoteApi";
import SaveToList from "../../SaveToList/SaveToList";
import Cookies from "js-cookie";
import Link from "next/link";
import Loader from "../../Loader";

const QuoteInfo = ({ quote, fetch }) => {
  const { data, isLoading, refetch,isFetched } = useQuoteInfo({
    searchName: quote.anime,
    searchChar: quote.character,
  });

  if (isLoading) return <></>;

  const anime = data.data.Media;
  const character = data.data.Character;

  const handleUpdate = async () => {
    await fetch();
    setTimeout(() => {
      refetch();
    }, 1500);
  };
  
  anime === undefined &&  handleUpdate()
  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          className="object-cover w-full max-h-64 blur hover:blur-none"
          src={anime.bannerImage === null ? "https://wallpapercave.com/wp/wp5734635.jpg" : anime.bannerImage}
          alt="bannerImage"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-3 lg:flex-row">
        <div className="relative flex flex-col items-center max-w-4xl gap-3 lg:flex-row">
          <div className="relative -inset-y-10 max-w-[40%] md:min-w-[30%] md:max-w-[32%] ">
              <img
                className="rounded-lg  object-cover w-full"
                src={anime.coverImage.extraLarge}
                alt="anime"
              />
            <Link href={`/${anime.type}/${anime.id}`} shallow={true}>
              <div className="absolute inset-0 flex flex-col justify-between p-2 rounded-lg opacity-0 hover:opacity-95 hover:bg-black ">
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
            {Cookies.get("token") && isFetched && (
            <div className="absolute bottom-0 w-full p-1 ">
              <SaveToList info={anime} myInfo={null} />
            </div>
          )}
          </div>
          <div className="flex flex-col gap-2 p-3">
            <div className="flex gap-3">
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img
                    className="rounded-lg w-28"
                    src={character.image.large}
                    alt="character"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <h1 className="bg-[#d7cccc] text-black p-1 rounded-lg">
                    {character.name.full}
                  </h1>
                </div>
                <div className="flex items-center w-full overflow-y-scroll rounded-lg scrollbar scrollbar-w-1 scrollbar-thumb-yellow-500 scrollbar-thumb-rounded-lg h-36">
                  <h1 className="p-2">{quote.quote}</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="rounded-sm btn btn-outline"
                onClick={() => handleUpdate()}
              >
                Random Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfo;
