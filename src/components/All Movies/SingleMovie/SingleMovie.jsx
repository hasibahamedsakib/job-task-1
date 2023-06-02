import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => {
  const show = movie.show;

  const {
    id,
    name,
    type,
    language,
    status,
    image,
    premiered,
    runtime,
    weight,
  } = show;

  return (
    <div className="card w-96 bg-base-100 border hover:shadow-lg space-y-3 p-3 rounded-md">
      <figure>
        <img
          src={image.medium}
          alt="shows image"
          className="h-52 w-full rounded-md"
        />
      </figure>
      <div className="">
        <h2 className="text-3xl font-semibold text-slate-800 font-serif">
          {name}
        </h2>

        <div className="flex justify-between py-2">
          <div className="text-lg font-semibold text-slate-700 space-y-2 font-sans">
            <p>Language {language}</p>
            <p>Type {type}</p>
            <p>Runtime {runtime} min</p>
          </div>
          <div className="text-lg font-semibold text-slate-700 space-y-2 font-sans">
            <p>Status {status}</p>
            <p>Premiered {premiered}</p>
            <p>Weight {weight}</p>
          </div>
        </div>
        <Link to={`/details/${id}`}>
          <button className="w-full px-3 py-2 text-xl bg-slate-100 hover:bg-slate-200 rounded-md my-3">
            See more Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleMovie;
