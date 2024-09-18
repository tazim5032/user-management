import React, { useEffect, useState } from "react";
import {
  FaCog,
  FaHome,
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/user/${user?.email}`);
    setUsers(data);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-green-400">ManageHub</h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:ml-6 space-x-4">
              <Link
                to="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaHome className="inline mr-2" /> Home
              </Link>
              <Link
                to="/settings"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaCog className="inline mr-2" /> Settings
              </Link>
            </div>
          </div>

          {/* Login/Logout/Profile */}
          <div className="hidden md:block">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  {user.photo}
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="inline mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
               to='/login'
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                <FaSignInAlt className="inline mr-2" /> Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <Link
              to="/dashboard"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              <FaHome className="inline mr-2" /> Dashboard
            </Link> */}
            <Link
              to="/"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              <FaHome className="inline mr-2" /> Home
            </Link>
            <Link
              to="/settings"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              <FaCog className="inline mr-2" /> Settings
            </Link>

            {isAuthenticated ? (
              <button
                onClick={toggleProfileMenu}
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FaUserCircle className="inline mr-2" /> Profile
              </button>
            ) : (
              <button
                // onClick={handleLogin}
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FaSignInAlt className="inline mr-2" /> Login
              </button>
            )}

            {isAuthenticated && isProfileOpen && (
              <div className="pl-6">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </Link>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="inline mr-2" /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
