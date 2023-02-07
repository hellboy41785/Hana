import React from 'react'
import { useAnimeStore, useTypeStore } from "../../../fetchData/useAnimeStore";
import { useListsQuery } from "../../../fetchData/useMyListQuery";
import Link from 'next/link';

const Lists = ({mylist}) => {
    const userId = useAnimeStore((state) => state.userId);
    const id = userId.data?.Viewer.id;
    const type = useTypeStore(state => state.type)
    const { data, isLoading } = useListsQuery(id,mylist[1]);
    if (isLoading) return <></>;
    const myLists = data.data.MediaListCollection.lists;

    return (
        <div className="flex gap-3 overflow-x-scroll cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-sm">
            {myLists.map((list) => (
                <div key={list.name}>
                    <Link href={`/mylist/${id}/${mylist[1]}/${list.status}`} shallow={true}>
                        {list.isCustomList === false && <h1 className={`${mylist[2] === list.status && "text-[#b57721]"} `}>{list.name}</h1>}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Lists