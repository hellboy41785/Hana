import {
  fetchData,
  fetchMangaData,
} from "../fetchData/useAnimeData";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Discover from "../components/Home/Quote/Discover";
import Airing from "../components/Home/Airing";
import NextAiring from "../components/Home/NextAiring";
import TrendingManga from "../components/Home/TrendingManga";
import { withCSR } from "../HOC/withCSR";

export default function Home() {

  return (
    <>
      <Discover />
      <Airing />
      <NextAiring />
      <TrendingManga />
    </>
  );
}

export const getServerSideProps = withCSR(async (context) => {
  const { params } = context;

  const queryClientAnime = new QueryClient();
  const queryClientManga = new QueryClient();

  await queryClientAnime.fetchQuery(["anime-data"], () => fetchData());
  await queryClientManga.fetchQuery(["manga-data"], () => fetchMangaData());

  return {
    props: {
      queryClientAnime: dehydrate(queryClientAnime),
      queryClientManga: dehydrate(queryClientManga),
    },
  };
});
