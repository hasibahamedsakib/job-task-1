import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-60 text-white  z-10 w-full">
      <div className="block md:flex justify-between w-full max-w-7xl mx-auto py-2">
        <div className="text-2xl font-bold ">
          <h2>Sineplex</h2>
          <h2>Chinema</h2>
        </div>
        <div className="block md:flex space-y-3 md:space-y-0 md:space-x-10 items-center uppercase font-bold">
          <p className="bg-pink-600 p-2 rounded-md md:bg-transparent">
            <Link>HOME</Link>
          </p>
          <p className="bg-pink-600 p-2 rounded-md md:bg-transparent">
            <Link>Contact us</Link>
          </p>
          <p className="bg-pink-600 p-2 rounded-md md:bg-transparent">
            <Link>Dashboard</Link>
          </p>
          <p className="bg-pink-600 p-2 rounded-md md:bg-transparent">
            <Link to="/menu">Your Booking</Link>
          </p>
          <p className="bg-pink-600 p-2 rounded-md md:bg-transparent">
            <Link>Our Most Popular Movies</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
