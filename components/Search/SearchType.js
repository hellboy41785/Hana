import Link from "next/link";
import { useSearchStore } from "../../fetchData/useAnimeStore";
import { useState, useEffect } from "react";
import { useSearchData } from "../../fetchData/useAnimeData";

const SearchType = ({ search, type }) => {
  const setMySearch = useSearchStore((state) => state.setMySearch);
  const { data, isLoading } = useSearchData({
    search: search,
  });
  if (isLoading) return <></>;

  const searchData =
    data.data.Page.media.length === 0 ? null : data.data.Page.media;
  return (
    searchData !== null && (
      <div className="bg-[#1a1c1e]  p-2 rounded-md flex flex-col gap-3">
        <div className="space-y-2 font-mono py-4">
          <h1 className="text-xl">{type}</h1>
          <div
            className="grid grid-cols-4  gap-3 lg:grid-cols-8"
            onClick={() => setMySearch()}
          >
            {searchData !== null &&
              searchData.map(
                (media) =>
                  media.type === type && (
                    <div key={media.id} className=" w-full h-full">
                      <Link href={`/${media.type}/${media.id}`}>
                        <img
                          className="object-cover min-w-full min-h-full rounded-md"
                          src={media.coverImage.large}
                        />
                        <h1 className="truncate text-xs">
                          {media.title.english === null
                            ? media.title.romaji
                            : media.title.english}
                        </h1>
                      </Link>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    )
  );
};

export default SearchType;
