import { useRouter } from "next/router";
import AnimeFilter from "../../components/Anime/AnimeFilter";
import { useState } from "react";
import AnimeInfiniteScroll from "../../components/Anime/AnimeInfiniteScroll";
import Head from "next/head";

const ViewAll = () => {
  const router = useRouter();
  const { viewanime = [] } = router.query;

  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= 2000; year--) {
    years.push(year);
  }

  const [year, setYear] = useState(currentYear);

  return (
    <>
    <Head>
      <title>{viewanime}</title>
    </Head>
      <AnimeFilter
        years={years}
        setYear={setYear}
        year={year}
        selectedSeason={viewanime}
      />
      <AnimeInfiniteScroll season={viewanime} year={year} />
    </>
  );
};

export default ViewAll;
