import moment from 'moment';

const Reviews = ({ info }) => {
  return (
    <div className='space-y-3'>
      <h1 className="text-2xl">Reviews</h1>
      <div className=" flex flex-col gap-7 font-mono">
        {info.edges.map((rev) => {
          const data = rev.node;
          return (
            <div className="relative" key={data.id}>
              <div className="avatar gap-3 items-end relative ">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={data.user.avatar.medium} />
                </div>
                <h1>{data.user.name}</h1>
                <h1>{moment.unix(data.createdAt).format('DD/MM/YYYY')}</h1>
              </div>
               <div className='relative border p-2 -inset-y-2 -z-10'>
                 <p>{data.summary}</p>
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
