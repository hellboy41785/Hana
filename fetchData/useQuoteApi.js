import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { quoteData } from "./apiQuery";
import {Headers,Url} from "./Headers"

export const randomQuote = async () => {
  const url = "https://animechan.vercel.app/api/random";
  const res = await axios.get(url);
  return res.data;
};

export const quoteInfo = async ({ searchName, searchChar }) => {
  const options = {
    method: "POST",
    url: Url,
    headers: Headers,
    data: quoteData({ searchName, searchChar }),
  };

  const response = await axios(options);

  return response.data;
};

export const useQuoteApi = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: () => randomQuote(),
    staleTime: 800 * 1000,
  });
  
};

export const useQuoteInfo = ({ searchName, searchChar }) => {
  return useQuery({
    queryKey: ["quoteInfo"],
    queryFn:()=> quoteInfo({ searchName, searchChar }),
    staleTime: 800 * 1000,
  });
};
