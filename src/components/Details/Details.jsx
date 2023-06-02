import { Link, useLoaderData, useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const movies = useLoaderData();
  const allShows = [];
  movies.map((movie) => allShows.push(movie.show));
  const showDetails = allShows?.find((movie) => movie.id == id);

  const {
    name,
    type,
    language,
    status,
    image,
    premiered,
    runtime,
    weight,
    summary,
    network,
    schedule,
    url,
  } = showDetails || {};
  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <h1 className="text-4xl py-10 text-center my-5 bg-gradient-to-r from-orange-50 to-slate-100">
        Movies Details...
      </h1>
      <div className=" md:flex   p-3 rounded-md border">
        <img
          src={image?.medium}
          alt=""
          className=" w-full md:w-1/2 h-[500px] rounded-lg p-2"
        />
        <div className=" pl-6 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-slate-800 font-serif">
            {name}
          </h2>

          <div className="flex justify-between py-2">
            <div className="text-lg font-semibold text-slate-700 space-y-2 font-sans">
              <p>Language: {language}</p>
              <p>Type: {type}</p>
              <p>Runtime: {runtime} min</p>
              <p>TimeZone : {network?.timezone}</p>
            </div>
            <div className="text-lg font-semibold text-slate-700 space-y-2 font-sans">
              <p>Status: {status}</p>
              <p>Premiered: {premiered}</p>
              <p>Weight: {weight}</p>
              <p>Day : {schedule?.days[0]}</p>
            </div>
          </div>
          {summary?.split(/[<p></p><b></b>]/)}

          <p>
            <Link className="text-xl text-blue-500 cursor-pointer" to={url}>
              Click me to see the movie
            </Link>
          </p>
          <Link to={`/bookings/${id}`}>
            <button className="w-full px-3 py-2 text-xl bg-slate-100 hover:bg-slate-200 rounded-md my-3">
              Booking Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
