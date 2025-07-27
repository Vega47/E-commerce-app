import { useContext, useState } from "react";
import cart from "../../assets/images/icons8-cart-80.png";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import heart from "../../assets/images/heart-svgrepo-com.svg";
const Navbar = () => {
  let { userLogin, setUserLogin } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function logout() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
  }

  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <h2 className="font-bold text-2xl inline">FreshCart</h2>
            <img src={cart} className="inline w-9 ms-5" alt="" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {userLogin !== null ? (
                <>
                  {" "}
                  <NavLink
                    to="/"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/products"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/category"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Categories
                  </NavLink>
                  <NavLink
                    to="/brands"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Brands
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to="/wishlist"
                    className="text-sm font-medium text-gray-900   px-3 py-2 rounded-md transition-colors duration-300 relative "
                  >
                    <i className="fa fa-regular fa-heart hover:text-red-500 "></i>
                  </NavLink>
                </>
              ) : null}
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-4 flex items-center md:ml-6">
              {userLogin === null ? (
                <>
                  {" "}
                  <NavLink
                    to="/register"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    onClick={logout}
                    to="/login"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                  >
                    Logout
                  </NavLink>
                </>
              )}
            </div>
            <div className="flex justify-center items-center">
              <ul className="mb-0">
                <li className="fab fa-facebook ms-1"></li>
                <li className="fab fa-instagram ms-1"></li>
                <li className="fab fa-tiktok ms-1"></li>
                <li className="fab fa-twitch ms-1"></li>
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {userLogin !== null ? (
          <>
            {" "}
            <NavLink
              to="/"
              className="text-gray-900 hover:text-green-600  before: block px-3 py-2 rounded-md text-base font-medium relative "
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </NavLink>
            <NavLink
              to="/category"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Categories
            </NavLink>
            <NavLink
              to="/brands"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Brands
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Cart
            </NavLink>
            <NavLink
              onClick={logout}
              to="/login"
              className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            {" "}
            {userLogin === null ? (
              <>
                {" "}
                <NavLink
                  to="/register"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
                {" "}
                <NavLink
                  onClick={logout}
                  to="/login"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-0.5 before:bottom-0 before:bg-black before:duration-1000"
                >
                  Logout
                </NavLink>
              </>
            )}
            {/* <NavLink
              to="/register"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </NavLink>
            <NavLink
              onClick={logout}
              to="/login"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </NavLink> */}
          </>
        )}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex justify-center items-center">
            <ul className="mb-0">
              <li className="fab fa-facebook ms-1"></li>
              <li className="fab fa-instagram ms-1"></li>
              <li className="fab fa-tiktok ms-1"></li>
              <li className="fab fa-twitch ms-1"></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
