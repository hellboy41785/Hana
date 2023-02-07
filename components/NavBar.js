import Link from "next/link";
import {
  useAnimeStore,
  useTypeStore,
  useSearchStore,
} from "../fetchData/useAnimeStore";
import { useState, useEffect } from "react";
import { HiHome, HiCalendar } from "react-icons/hi";
import { IoMdListBox } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  const type = useTypeStore((state) => state.type);
  const userId = useAnimeStore((state) => state.userId);
  const [toggle, setToggle] = useState(false);

  const setMySearch = useSearchStore((state) => state.setMySearch);

  const [id, setId] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setId(userId.data?.Viewer.id);
    };
    fetchData();
  }, [userId]);

  return (
    <div className="fixed inset-x-[88%] lg:inset-x-[96.5%]  z-10  bottom-3  w-12 space-y-6">
      {toggle && (
        <div className="space-y-2">
          <div>
            <IoSearch
              className=" bg-[#b57721] rounded-full p-1 text-4xl cursor-pointer text-black"
              onClick={() => setMySearch()}
            />
          </div>
          <div>
            <Link
              href={
                id === undefined ? `/login` : `/mylist/${id}/${type}/CURRENT`
              }
              shallow={true}
            >
              <IoMdListBox className=" bg-[#b57721] rounded-full p-1 text-4xl text-black" />
            </Link>
          </div>
          {/* <div>
            <HiCalendar className=" bg-gray-500 rounded-full p-1 text-4xl" />
          </div> */}
          <div >
            <Link href={`/`} shallow={true}>
              <HiHome className=" bg-[#b57721] rounded-full p-1 text-4xl text-black" />
            </Link>
          </div>
        </div>
      )}
      <div className="">
        <label className="rounded-full p-1 swap swap-rotate  bg-[#b57721]">
          <input type="checkbox" onClick={() => setToggle((prev) => !prev)} />
          <svg
            className="swap-off fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
