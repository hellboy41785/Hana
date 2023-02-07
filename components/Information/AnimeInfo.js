import Characters from "./components/Characters";
import MiddleStyle from "./components/MiddleStyle";
import Recommendation from "./components/Recommendation";
import Reviews from "./components/Reviews";
import TopStyle from "./components/TopStyle";
import Relation from "./components/Relation";

const AnimeInfo = ({ info }) => {
  return (
    <div className=" space-y-4">
      <TopStyle info={info} />
      <MiddleStyle info={info} />
      {info.relations.edges.length !== 0 && <Relation info={info} />}
      
      {info.characters.edges.length !== 0 && <Characters info={info} />}
      {info.recommendations.edges.length !== 0 && (
        <Recommendation info={info} />
      )}
      {info.reviews.edges.length !== 0 && <Reviews info={info.reviews} />}
    </div>
  );
};

export default AnimeInfo;
