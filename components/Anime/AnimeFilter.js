import Link from "next/link";
import { useState } from "react";

const AnimeFilter = ({ years, year, setYear,selectedSeason }) => {
  const [season, setSeason] = useState(null);

  return (
    <div className="flex gap-2 p-2 font-mono">
      <select
        className="w-32 max-w-xs rounded-md select select-bordered select-lg scrollbar scrollbar-w-1"
        defaultValue={year}
        onChange={(e) => setYear(e.target.value)}
      >
        {years.map((year) => (
          <option className="" key={year}>{year}</option>
        ))}
      </select>
      <Link href={`/anime/${season === null ? selectedSeason : season}`} shallow={true}>
        <select
          className="w-full max-w-xs rounded-md select select-bordered select-lg"
          defaultValue={selectedSeason}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option>WINTER</option>
          <option>SPRING</option>
          <option>SUMMER</option>
          <option>FALL</option>
        </select>
      </Link>
    </div>
  );
};

export default AnimeFilter;
