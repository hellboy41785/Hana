import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Headers, Url } from "./Headers";
import { Information, mangaData, animeData, searchData } from "./apiQuery";

export const fetchData = async (season, seasonYear, page, perPage) => {
  const options = {
    method: "POST",
    url: Url,
    headers: Headers,
    data: animeData(season, seasonYear, page, perPage),
  };

  const response = await axios(options);

  return response?.data;
};

export const fetchMangaData = async (page, perPage) => {
  const options = {
    method: "POST",
    url: Url,
    headers: Headers,
    data: mangaData(page, perPage),
  };

  const response = await axios(options);

  return response?.data;
};

export const fetchInfoData = async (type, id) => {
  const options = {
    method: "POST",
    url: Url,
    headers: Headers,
    data: Information(type, id),
  };

  const response = await axios(options);

  return response?.data;
};

export const fetchSearchData = async ({ search }) => {
  const options = {
    method: "POST",
    url: Url,
    headers: Headers,
    data: searchData({ search }),
  };

  const response = await axios(options);

  return response?.data;
};

export const useAnimeData = (season, seasonYear, page, perPage) => {
  return useInfiniteQuery(
    ["anime-data", season, seasonYear],
    ({ pageParam }) => fetchData(season, seasonYear, pageParam, perPage),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
      staleTime:Infinity
    }
  );
};

export const useMangaData = (page, perPage) => {
  return useInfiniteQuery(
    ["manga-data"],
    ({ pageParam }) => fetchMangaData(pageParam, perPage),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
      staleTime:Infinity
    }
  );
};
export const useInfo = (type, id) => {
  return useQuery(["info", type, id], () => fetchInfoData(type, id),{
    staleTime:Infinity
  });
};

export const useSearchData = ({ search }) => {
  return useQuery({
    queryKey: ["search", search],
    queryFn: () => fetchSearchData({ search }),
    cacheTime: 0,
  });
};
