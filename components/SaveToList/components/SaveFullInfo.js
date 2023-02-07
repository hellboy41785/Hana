import { useState } from "react";
import { useMyListData } from "../../../fetchData/useAnimeStore";
import { useAddQuery } from "../../../fetchData/useAddQuery";
import Cookies from "js-cookie";
const SaveFullInfo = () => {
  const updateData = useMyListData((state) => state.updateData);
  const setUpdateData = useMyListData((state) => state.setUpdateData);
  const token = Cookies.get("token");
  const [status, setStatus] = useState(updateData.status);
  const [score, setScore] = useState(updateData.score);
  const [progress, setProgress] = useState(updateData.progress);
  const { mutate } = useAddQuery();
 
  const handleSubmit = () => {
    mutate({
      token: token,
      mediaId: updateData.mediaId,
      status: status,
      score: score,
      progress: progress,
    });
    setUpdateData({ newInitial: false })
  };
  const handleProgress = (e) => {
    const newProgress = Number(e.target.value);
    if (updateData.episodes === null ? newProgress >= 0 :newProgress <= updateData.episodes && newProgress >= 0) {
      setProgress(status === "COMPLETED" ? updateData.episodes:newProgress);
    }
  };

  const handleScore=(e)=>{
    const newScore = Number(e.target.value);
    if (newScore <= 5 && newScore >= 0) {
      setScore(newScore);
    }
  }

  return (
    <div className="fixed top-0 z-20 flex items-center justify-center w-full h-full p-1 font-mono ">
      <div className="bg-[#1a1c1e] w-full p-3 space-y-7 max-w-lg">
        <h1 className="text-2xl">{updateData.title.english}</h1>
        <div className="flex flex-col gap-6 ">
          <select
            className="p-2 text-md"
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>CURRENT</option>
            <option>COMPLETED</option>
            <option>PLANNING</option>
            <option>REPEATING</option>
            <option>PAUSED</option>
            <option>DROPPED</option>
          </select>

          <div className="flex gap-2 ">
            <div className="relative w-full">
              <input
                className="p-2 border border-yellow-300 bg-[#1a1c1e] rounded-sm w-full"
                type="number"
                value={progress}
                onChange={handleProgress}
              />
              <div className="absolute z-10 h-0 pl-1 text-green-300 bg-green-400 -inset-y-5 z-2">
                <h1 className="bg-[#1a1c1e] p-1">Progress</h1>
              </div>
            </div>
            <div className="relative w-full">
              <input
                className="p-2 border border-yellow-300 bg-[#1a1c1e] rounded-sm w-full"
                type="number"
                value={score}
                onChange={handleScore}
              />
              <div className="absolute z-10 h-0 pl-1 text-green-300 bg-green-400 -inset-y-5 z-2">
                <h1 className="bg-[#1a1c1e] p-1">Score</h1>
              </div>
              <h1 className="bg-green">{updateData.episode}</h1>
            </div>
          </div>
          {/* Button for Saving and Closing */}
          <div className="flex justify-between">
            <button
              className="rounded-md btn btn-outline btn-accent"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="rounded-md btn btn-outline btn-accent"
              onClick={() => setUpdateData({ newInitial: false })}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveFullInfo;
