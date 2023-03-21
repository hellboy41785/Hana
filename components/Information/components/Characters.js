

const Characters = ({info}) => {
  return (
    <>
    <h1 className="font-mono text-2xl">Characters</h1>
    <div className="flex gap-3  overflow-x-scroll scrollbar scrollbar-h-1 scrollbar-thumb-gray-500  scrollbar-thumb-rounded-lg cursor-pointer ">
      {info.characters.edges.map((char) => (
        <div className="relative min-w-[100px] max-w-[100px] p-1" key={char.id}>
          <img
            className="rounded-md object-cover min-w-full min-h-full"
            src={char.node.image.large}
            alt="character"
          />
          <div className="absolute inset-0 h-full w-full flex items-end justify-center bottom-2 opacity-0 hover:opacity-100">
            <h1 className="bg-gray-600 rounded-md text-xs p-1 text-center w-full ">
              {char.node.name.full}
            </h1>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Characters