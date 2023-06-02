import { useLoaderData, useParams } from "react-router-dom";

const Bookings = () => {
  const { id } = useParams();
  const movies = useLoaderData();

  const allShows = [];
  movies.map((movie) => allShows.push(movie.show));
  const bookingData = allShows?.find((movie) => movie.id == id);
  const { name, language, status, premiered, runtime, weight } =
    bookingData || {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const language = event.target.language.value;
    const status = event.target.status.value;
    const runtime = event.target.runtime.value;
    const premiered = event.target.premiered.value;
    const weight = event.target.weight.value;
    const details = { id, name, language, status, runtime, premiered, weight };

    let allBookings = [];
    var get = JSON.parse(localStorage.getItem("all-bookings"));
    allBookings = [get];

    allBookings.push(details);
    localStorage.setItem("all-bookings", JSON.stringify([allBookings]));
  };
  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <h2 className="text-4xl py-10 text-center my-5 bg-gradient-to-r from-orange-50 to-slate-100">
        Booking Now
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="border p-2 rounded-md w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Show Name"
              name="name"
              className="input input-bordered w-full bg-slate-100 p-2 rounded-md mt-1"
              defaultValue={name}
            />
          </div>

          <div className="border p-2 rounded-md w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Language*</span>
            </label>
            <input
              type="text"
              name="language"
              placeholder="Type Show Language"
              className="input input-bordered w-full  bg-slate-100 p-2 rounded-md mt-1"
              defaultValue={language}
            />
          </div>

          <div className="border p-2 rounded-md w-full my-4">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              defaultValue={status}
              name="status"
              className="file-input file-input-bordered w-full bg-slate-100 p-2 rounded-md mt-1"
            />
          </div>
          <div className="border p-2 rounded-md w-full my-4">
            <label className="label">
              <span className="label-text">Show Runtime</span>
            </label>
            <input
              type="text"
              name="runtime"
              defaultValue={runtime}
              className="file-input file-input-bordered w-full bg-slate-100 p-2 rounded-md mt-1"
            />
          </div>
          <div className="border p-2 rounded-md w-full my-4">
            <label className="label">
              <span className="label-text">Premiered</span>
            </label>
            <input
              type="text"
              defaultValue={premiered}
              name="premiered"
              className="file-input file-input-bordered w-full bg-slate-100 p-2 rounded-md mt-1"
            />
          </div>
          <div className="border p-2 rounded-md w-full my-4">
            <label className="label">
              <span className="label-text">weight</span>
            </label>
            <input
              type="text"
              defaultValue={weight}
              name="weight"
              className="file-input file-input-bordered w-full bg-slate-100 p-2 rounded-md mt-1"
            />
          </div>
        </div>
        <input
          className="w-full p-4 bg-slate-100 hover:bg-slate-200 rounded-md"
          type="submit"
          value="Booking now"
        />
      </form>
    </div>
  );
};

export default Bookings;
