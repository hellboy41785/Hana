import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Headers,Url } from "./Headers";
import { myListData,Lists } from "./apiQuery";

export const fetchMyListData = async (userId,type,status) => {
  const options = {
    method: "POST",
    url: Url,
    headers:Headers,
    data:myListData(userId,type,status),
  };
  const res = await axios(options);
  return res?.data;
};

const fetchLists=async(userId,type)=>{

  const options = {
    method: "POST",
    url: Url,
    headers:Headers,
    data:Lists(userId,type),
  };
  const res = await axios(options);
  return res?.data;
}

export const useMyListQuery = (userId,type,status) => {
  return useQuery(["myList",type,status], () => fetchMyListData(userId,type,status),{
    refetchOnWindowFocus:false
  });
};
export const useListsQuery = (userId,type) => {
  return useQuery(["List",type], () => fetchLists(userId,type),{
    refetchOnMount:false,
    refetchOnWindowFocus:false
  });
};
