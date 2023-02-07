import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { tokenHeaders, Url } from "./Headers";
import { saveToList,checkMyList } from "./apiQuery";

export const addToList = async ({
  token,
  mediaId,
  status,
  progress,
  score,
}) => {
  const options = {
    method: "POST",
    url: Url,
    headers: tokenHeaders(token),
    data: saveToList({ mediaId, status, progress, score }),
  };

  const res = await axios(options);

  return res;
};

export const checkList = async ({ token, userId, mediaId }) => {
  let requestCount = 0;
  const timeWindow = (1000 * 60) / 90;
  requestCount += 1;

  if (requestCount > 90) {
    const timeLeft = timeWindow - (Date.now() % timeWindow);
    await new Promise((resolve) => setTimeout(resolve, timeLeft));
  }
  
  const options = {
    method: "POST",
    url: Url,
    headers: tokenHeaders(token),
    data:checkMyList({ userId, mediaId }),
  };

  const res = await axios(options);
  requestCount = 0;
  return res.data;
};

export const useAddQuery = () => {
  return useMutation({
    mutationFn: addToList,
  });
};
export const useCheckListQuery = ({ token, userId, mediaId }) => {
  return useQuery({
    queryKey: ["checkList", mediaId],
    queryFn: () => checkList({ token, userId, mediaId }),
  });
};
