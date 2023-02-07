import { useState } from "react";
import SearchType from "./SearchType";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="sticky top-3 w-full p-2 z-10  flex justify-center gap-4">
      <div className="  w-full lg:max-w-6xl space-y-5 p-2">
        <input
          type="text"
          placeholder="Search"
          className="input border border-gray-100 w-full rounded-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full lg:max-w-6xl space-y-5 p-2 fixed inset-y-20">

        {/* Anime Result */}
        <SearchType search={search} type="ANIME" />
        {/* Manga Result */}
        <SearchType search={search} type="MANGA" />
      </div>
    </div>
  );
};

export default Search;
