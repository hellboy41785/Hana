import Image from "next/image";
import Paw from "../../public/paw.svg";
import Cookies from "js-cookie";
import { useEffect } from "react";
import queryString from "query-string";
import { useRouter } from "next/router";
import { useAnimeStore } from "../../fetchData/useAnimeStore";

const Auth = () => {
  const router = useRouter();
  const fetchUserId = useAnimeStore((state) => state.fetchUserId);
  const url = `https://anilist.co/api/v2/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=token`;

  const userId = useAnimeStore((state) => state.userId);

  useEffect(() => {
    if (!Cookies.get("token")) {
      const { access_token } = queryString.parse(window.location.hash);
      if (!access_token) {
        return;
      }
      Cookies.set("token", access_token);
      fetchUserId();
      router.push(`/`);
    }
  }, [userId]);

  useEffect(() => {
    ReactDOM.hydrate(
      <div className="w-full h-screen  flex flex-col gap-6 items-center justify-center font-mono">
        <Image src={Paw} alt="paw" />
        <a className="btn btn-outline btn-secondary rounded-sm" href={url}>
          {Cookies.get("token") ? "You are Logged In" : "Login In with AniList"}
        </a>
      </div>,
      document.getElementById("root")
    );
  }, [url]);

  return <div id="root" />;
};

export default Auth;
