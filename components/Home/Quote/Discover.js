import Image from "next/image";
import { useQuoteApi} from "../../../fetchData/useQuoteApi";
import Loader from "../../Loader";
import QuoteInfo from "./QuoteInfo";
const Discover = () => {
  const { data: quote, isLoading, refetch} = useQuoteApi();
  if (isLoading) return <Loader />;


  return (
    <div className="flex flex-col items-center justify-center w-full font-mono">
      <QuoteInfo quote={quote} fetch={()=>refetch()}/>
    </div>
  );
};

export default Discover;
