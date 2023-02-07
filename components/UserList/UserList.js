import { useTypeStore, useAnimeStore } from "../../fetchData/useAnimeStore";
import Lists from "./components/Lists";
import Link from "next/link";
const UserList = ({mylist}) => {

  const setType = useTypeStore(state => state.setType)
  const userId = useAnimeStore((state) => state.userId);
  const id = userId.data?.Viewer.id;

  return (
    <div className="p-2 font-mono space-y-4">
      <div className="flex gap-3">
        <Link href={`/mylist/${id}/ANIME/CURRENT`} shallow={true}>
          <button className={`btn  btn-accent rounded-md ${mylist[1] === "ANIME" ? "bg-[#b47721]" :"bg-[#171212] text-[#b47721] hover:text-black"}`}>Anime</button>
        </Link>
        <Link href={`/mylist/${id}/MANGA/CURRENT`} shallow={true}>
          <button className={`btn  btn-accent rounded-md ${mylist[1] === "MANGA" ? "bg-[#b47721]" :"bg-[#171212] text-[#b47721] hover:text-black"}`}>Manga</button>
        </Link>
      </div>

      <Lists mylist={mylist}/>

    </div>
  );
};

export default UserList;
