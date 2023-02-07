import NavBar from "./NavBar";
import SaveMessage from "./SaveToList/components/SaveMessage";
import { useMyListData,useSearchStore } from "../fetchData/useAnimeStore";
import { useEffect } from "react";
import SaveFullInfo from "./SaveToList/components/SaveFullInfo";
import Search from "./Search/Search";

const Layout = ({ children }) => {
  const myData = useMyListData(state=>state.myData)
  const setMyData = useMyListData((state) => state.setMyData);
  const updateData = useMyListData((state) => state.updateData);
  const mySearch = useSearchStore(state=>state.mySearch)

  useEffect(()=>{
    setTimeout(()=>{
      setMyData(null,null,false)
    },15000)
  },[myData])
  return (
    <div>
      {mySearch && <Search/>}
      {myData.initial && <SaveMessage/>}
      {updateData.initial && <SaveFullInfo/>}
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
