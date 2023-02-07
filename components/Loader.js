import Loading from "../public/loading.svg"
import Image from "next/image";
const Loader = () => {
  return (
    
      <div className="fixed bottom-4 ml-3">
        <Image className="w-10" src={Loading} alt="loading" priority="high" as="loading"/>
      </div>
    
  );
};

export default Loader;
