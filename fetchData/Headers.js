export const Headers = {
  "content-type": "application/json",
  "X-RapidAPI-Key": process.env.API_KEY,
  "X-RapidAPI-Host": process.env.API_HOST,
}


export const Url = "https://anilist-graphql.p.rapidapi.com/";

export const tokenHeaders = (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  };
  return headers;
};
