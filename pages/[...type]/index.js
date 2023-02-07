import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchInfoData, useInfo } from "../../fetchData/useAnimeData";
import AnimeInfo from "../../components/Information/AnimeInfo";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import { withCSR } from "../../HOC/withCSR";
import Head from "next/head";
const Information = () => {
  const router = useRouter();
  const { type = [] } = router.query;

  const { data, isLoading, isFetching } = useInfo(type[0], type[1]);

  const info = data?.data.Media;

  if (isLoading || isFetching) return <Loader />;
  return (
    <>
      <Head>
        <title>
          {info.title.english === null ? info.title.romaji : info.title.english}
        </title>
      </Head>
      <div className="p-2 w-full h-full py-5">
        <AnimeInfo info={info} />
      </div>
    </>
  );
};

export default Information;

export const getServerSideProps = withCSR(async (context) => {
  const { type } = context.params;

  const queryClientAnime = new QueryClient();

  await queryClientAnime.fetchQuery(["info", type[0], type[1]], () =>
    fetchInfoData(type[0], type[1])
  );

  return {
    props: {
      queryClientAnime: dehydrate(queryClientAnime),
    },
  };
});
