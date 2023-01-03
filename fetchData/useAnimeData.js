import { useQuery } from "react-query";
import axios from "axios";

export const fetchData = async() => {
  const headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "71494048f6msh14f8a409cfe7684p12c51fjsna63324aba25e",
    "X-RapidAPI-Host": "anilist-graphql.p.rapidapi.com",
  };

  const requestData = {
    query: `
    query{
        Page(page: 1, perPage: 10) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media(type: ANIME, season: FALL, seasonYear: 2022) {
            id
            title {
              romaji
              english
            
            }
            season
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            seasonYear
            episodes
            type
            source
            airingSchedule {
              pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
              }
              edges {
                id
                
              }
            }
            status
          }
        }
      }
    `,
  };
  const options = {
    method: "POST",
    url: "https://anilist-graphql.p.rapidapi.com/",
    headers,
    data: requestData,
  };

  const response = await axios(options);

  return response?.data
};

export const useAnimeData = () => {
  return useQuery("anime-data",()=>fetchData());
};
