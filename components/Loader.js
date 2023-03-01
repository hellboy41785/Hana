import Loading from "../public/loading.svg"
import Image from "next/image";
const Loader = () => {
  return (
    
      <div className="fixed ml-3 bottom-4">
        <Image className="w-10" src={Loading} alt="loading" priority={true}  loading="eager"/>
      </div>
    
  );
};

export default Loader;
