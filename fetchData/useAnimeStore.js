import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import Cookies from "js-cookie";
import axios from "axios";

export const useAnimeStore = create(
  devtools(
    persist(
      (set, get) => ({
        userId: {},
        fetchUserId: async () => {
          const headers = {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
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
          set({ userId: res.data });
        },
      }),
      {
        name: "userID",
      }
    )
  )
);

export const useTypeStore = create(
  devtools((set, get) => ({
    type: "ANIME",
    setType: (value) => {
      set({ type: value });
    },
  }))
);

export const useMyListData = create(
  devtools((set, get) => ({
    myData: {
      name: null,
      status: null,
      initial: false,
    },
    updateData: {
      title: null,
      mediaId: null,
      status:null,
      score:null,
      progress:null,
      episodes:null,
      initial: false,
    },
    setMyData: (newName, newStatus, newInitial) => {
      set({
        myData: {
          name: newName,
          status: newStatus,
          initial: newInitial,
        },
      });
    },
    setUpdateData: ({ newTitle, newMediaId, newInitial,newScore,newProgress,newStatus,newEpisodes }) => {
      set({
        updateData: {
          title: newTitle,
          mediaId: newMediaId,
          status:newStatus,
          score:newScore,
          progress:newProgress,
          episodes:newEpisodes,
          initial: newInitial,
        },
      });
    },
  }))
);

export const useSearchStore = create(
  devtools((set,get)=>({
    mySearch:false,
    setMySearch:()=>{set((state)=>({mySearch:!state.mySearch}))}
  }))
)
