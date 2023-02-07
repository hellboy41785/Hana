import Link from "next/link";

const MiddleStyle = ({ info }) => {
  return (
    <>
      {/* Tags */}
      <div className=" grid md:grid-cols-2 gap-2">
        <div className="">
          <h1 className="text-2xl">Synopsis</h1>
          <p>
            {info.description === null
              ? "No Description"
              : info.description.replace(/<[^>]*>/g, "")}
          </p>
        </div>
        {info.tags.length !== 0 && (
          <div className="space-y-3">
            <h1 className="text-2xl">Tags</h1>
            <div className="grid grid-cols-5 md:grid-cols-7 gap-2">
              {info.tags.slice(0, 15).map((tag) => (
                <h1
                  className="bg-gray-400 p-2 flex items-center justify-center text-center rounded-md text-xs truncate"
                  key={tag.id}
                >
                  {tag.name}
                </h1>
              ))}
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default MiddleStyle;
