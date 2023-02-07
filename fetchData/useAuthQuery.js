import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const fetchAuth = async (token) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  const data = {
    query: `
    query{
        Viewer {
            id
          }
    }`,
  };
  const options = {
    method: "POST",
    url: "https://graphql.anilist.co",
    headers,
    data,
  };
  const res = await axios(options);

  return res?.data.data.Viewer.id;
};

export const useAuthQuery = (token) => {
  return useQuery(["auth"], () => fetchAuth(token));
};
