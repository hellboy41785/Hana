import { useRouter } from "next/router";
import {
  fetchMyListData,
} from "../../fetchData/useMyListQuery";
import UserList from "../../components/UserList/UserList";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Entries from "../../components/UserList/Entries";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { withCSR } from "../../HOC/withCSR";
import Head from "next/head";

const MyList = () => {
  const router = useRouter();
  const { mylist = [] } = router.query;
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return (
    <>
    <Head>
      <title>{mylist[1]} | {mylist[2]}</title>
    </Head>
      <UserList mylist={mylist}/>
      <Entries mylist={mylist} />
    </>
  );
};

export default MyList;


export const getServerSideProps = withCSR(async (context) => {
  const { mylist } = context.params;

  const queryClientMyList = new QueryClient();

  await queryClientMyList.fetchQuery(["myList",mylist[1], mylist[2]], () =>
    fetchMyListData(mylist[0],mylist[1], mylist[2])
  );

  return {
    props: {
      queryClientMyList: dehydrate(queryClientMyList),
    },
  };
});
