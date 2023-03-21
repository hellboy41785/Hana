import Link from "next/link";
const Relation = ({ info }) => {
  return (
    <>
      {/* Relations */}
      <h1 className="text-2xl font-mono">Relation</h1>
      <div className="flex overflow-x-scroll scrollbar scrollbar-h-1 scrollbar-thumb-gray-500  scrollbar-thumb-rounded-lg  gap-2  p-2 ">
        {info.relations.edges.map((relation) => (
          <div
            className=" relative min-w-[150px] max-w-[150px] "
            key={relation.node.id}
          >
            <Link
              href={`/${relation.node.type}/${relation.node.id}`}
              shallow={true}
            >
              <div className="relative w-full h-full ">
                <img
                  src={relation.node.coverImage.large}
                  className="object-cover min-w-full min-h-full rounded-md"
                />
              </div>
              <div className="absolute flex flex-col-reverse justify-between  inset-0  p-2 ">
                <div className="space-y-2 text-white">
                  {/* Title */}
                  <div>
                    <h1 className="font-mono text-sm  text-ellipsis  text-black bg-secondary-focus rounded-md p-1 h-6 truncate">
                      {relation.node.title.english === null
                        ? relation.node.title.romaji
                        : relation.node.title.english}
                    </h1>
                  </div>

                  {/* Types and Format */}
                  <div className="flex gap-1 text-xs">
                    <h1 className="bg-[#0092ca] p-1 rounded-sm">
                      {relation.relationType}
                    </h1>

                    <h1 className="bg-[#0092ca] p-1 rounded-sm">
                      {relation.node.format}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Relation;
