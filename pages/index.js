import { Inter } from '@next/font/google'
import { useAnimeData, fetchData } from '../fetchData/useAnimeData'
import Image from 'next/image'
import { QueryClient,dehydrate } from 'react-query'


export default function Home() {
   const {data,isLoading} = useAnimeData()

   if(isLoading)
   return <h1>Loading .....</h1>
   
   const lists = data?.data.Page.media
   console.log(lists)

  return (
    <>
     <div className="text-2xl">
       {lists?.map((list)=>{

          return <h1 key={list.id} className="text-2xl text-white">{list.title?.english}</h1>
       })}
     </div>
    </>
  )
}

export const getServerSideProps= async(context)=>{
 const {params} = context

 const queryClient = new QueryClient()

 await queryClient.fetchQuery(["anime-data"],()=>fetchData())

 return{
  props:{
    queryClient: dehydrate(queryClient)
  }
 }
}

