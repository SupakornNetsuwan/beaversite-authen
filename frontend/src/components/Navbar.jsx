import { Link, useNavigate } from "react-router-dom";
import useAuthen from "../hooks/useAuthen";

const Navbar = () => {
  const { signOut, user } = useAuthen();
  const navigate = useNavigate();

  const signOutHandle = () => {
    signOut();
    navigate("/");
  };

  return (
    <div className="flex justify-between bg-gray-800 px-6 py-4">
      <h2 className="text-2xl text-white font-semibold">Beaversite.com</h2>
      <ul className="flex items-center space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
        </li>
        {user.isAuthen && (
          <li>
            <Link to="/dashboard" className="hover:text-red-500">
              Dashboard
            </Link>
          </li>
        )}
        <li>
          {user.isAuthen ? (
            <button onClick={signOut} className="text-white bg-red-500 px-3 py-1 rounded-full ">
              Signout
            </button>
          ) : (
            <Link to="/signin" className="hover:text-red-500">
              Signin
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
