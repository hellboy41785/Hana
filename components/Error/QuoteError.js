const QuoteError = ({ refetch, anime }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[600px] p-2 gap-4">
      <h1 className="text-2xl text-center">Can't able find Quote for {anime}</h1>
      <div className="flex justify-end">
        <button
          className="rounded-sm btn btn-outline"
          onClick={() => refetch()}
        >
          Click here to find another
        </button>
      </div>
    </div>
  );
};

export default QuoteError;
