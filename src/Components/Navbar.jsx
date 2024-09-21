import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();

  //console.log(user)

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Website Name */}
          <div className="flex items-center">
            <Link to="/" className="text-green-400 text-2xl font-bold">
              ManageHub
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-white hover:text-gray-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/manage-user"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-white hover:text-gray-300"
              }
            >
              Manage User
            </NavLink>

            {/* Conditional Login/Logout */}
            {user ? (
              <div className="flex gap-4">
                <Link to="/manage-user">
                  <button
                    // onClick={logOut}
                    className="text-white bg-green-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    {user}
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    onClick={logOut}
                    className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-red-500 font-bold"
                : "block text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/manage-user"
            className={({ isActive }) =>
              isActive
                ? "block text-red-500 font-bold"
                : "block text-white hover:text-gray-300"
            }
          >
            Manage User
          </NavLink>

          {user ? (
            <div className="flex flex-col gap-4">
              <button
                // onClick={logOut}
                className="block w-full text-left text-white bg-green-600 px-3 py-2 rounded-md hover:bg-red-700"
              >
                {user}
              </button>
              <button
                onClick={logOut}
                className="block w-full text-left text-white bg-red-600 px-3 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block w-full text-left text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
