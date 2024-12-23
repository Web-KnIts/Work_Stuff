import React, { useState, useEffect } from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Cart_icon, Logo, Profile_icon } from "../assets";
import { signOutUser } from "../Firebase/Auth";
import { useShop } from "../context/ShopProvider";

const Navbar = ({ navDataTest }) => {
  const [showDrop, setShowDrop] = useState(false);
  const { user } = useAuth();
  const [showSearchDropDown, setShowSearchDropDown] = useState(false);
  const [query, setQuery] = useState("");
  const { setSearch, totalItemInCart } = useShop();
  
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (showDrop) setShowDrop(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [showDrop]);

  function handleSearchValue(e) {
    setQuery(e.target.value);
    setSearch(e.target.value);
  }

  const navigation = [
    { title: "Home", link: "/" },
    { title: "Collections", link: "/collections" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <div className="fixed z-10 w-full bg-white">
        <div className="flex flex-col px-8 font-medium md:px-10 lg:px-20 py-5 gap-5">
          <div className="flex items-center justify-between md:gap-[30px] gap-[20px]">
            <Link to="/">
              <img src={Logo} className="w-44 md:w-48 lg:w-60 cursor-pointer" alt="Logo" />
            </Link>
             <div className="relative flex-1">
             <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearchValue}
                onClick={() => setShowSearchDropDown(true)}
                className="hidden md:block w-full p-2 px-4 md:text-base lg:text-lg text-gray-900 border rounded-[10px] border-gray-300 bg-gray-50 outline-none"
              />
              <button
                className="absolute hidden md:flex  top-0 right-0 items-center h-full px-3 bg-red-400 text-white"
                onClick={() => setShowSearchDropDown(!showSearchDropDown)}
              >
                {showSearchDropDown ? (
                  <FaWindowClose className="text-[24px]" />
                ) : (
                  <FaSearch className="text-[20px]" />
                )}
              </button>
              {showSearchDropDown && (
                <SparePartsList
                  hidden={true}
                  setShowSearchDropDown={setShowSearchDropDown}
                  setQuery={setQuery}
                />
              )}
             </div>
            <div className="relative">
              <img
                src={Profile_icon}
                alt="Profile"
                className="w-6 cursor-pointer"
                onClick={() => setShowDrop((prev) => !prev)}
              />
              <div
                className={`absolute z-[30] -right-5 pt-4 transition-all duration-500 ease-out 
                  ${showDrop ? "opacity-100 max-h-[500px] visible" : "opacity-0 max-h-0 invisible"}`}
              >
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-black text-white rounded overflow-hidden">
                  {!user ? (
                    <>
                      <Link to="/register" className="cursor-pointer hover:opacity-85">
                        Register
                      </Link>
                      <Link to="/login" className="cursor-pointer hover:opacity-85">
                        Signin
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/profile" className="cursor-pointer hover:opacity-85">
                        Profile
                      </Link>
                      <Link to="/order" className="cursor-pointer hover:opacity-85">
                        Order
                      </Link>
                      <Link
                        to="/"
                        onClick={signOutUser}
                        className="cursor-pointer hover:opacity-85"
                      >
                        Logout
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <img src={Cart_icon} alt="Cart" className="w-6 cursor-pointer" />
              <p className="absolute -right-2 -bottom-3 bg-white text-[12px] rounded-full aspect-square font-bold">
                {totalItemInCart}
              </p>
            </Link>
          </div>

          {/* Mobile Search */}
          <div className="relative block md:hidden mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearchValue}
              onClick={() => setShowSearchDropDown(true)}
              className="w-full p-2 px-4 md:text-base lg:text-lg text-gray-900 border rounded-[10px] border-gray-300 bg-gray-50 outline-none"
            />
            <button
              className="absolute top-0 right-0 items-center h-full px-3 bg-red-400 text-white"
              onClick={() => setShowSearchDropDown(!showSearchDropDown)}
            >
              {showSearchDropDown ? (
                <FaWindowClose className="text-[24px]" />
              ) : (
                <FaSearch className="text-[20px]" />
              )}
            </button>
            {showSearchDropDown && (
              <SparePartsList
                hidden={false}
                setShowSearchDropDown={setShowSearchDropDown}
                setQuery={setQuery}
              />
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex navbar">
          {navigation.map((val) => (
            <NavLink
              key={val.title}
              to={val.link}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {val.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

const SparePartsList = ({ setShowSearchDropDown, setQuery,hidden}) => {
  const { filteredSpareParts } = useShop();
  const navigate = useNavigate();
  return (
    <div className={`absolute top-12 max-h-[300px] w-full overflow-y-auto bg-white border rounded-[10px] shadow-md z-10 ${hidden?"hidden md:block ":" md:hidden"}`}>
      {filteredSpareParts.length === 0 ? (
        <p className="p-4 text-center text-gray-600">No spare parts found.</p>
      ) : (
        filteredSpareParts.map((part, index) => (
          <div
            key={index}
            className="p-4 border-b last:border-none cursor-pointer"
            onClick={() => {
              setShowSearchDropDown(false);
              setQuery(part.data.title);
              navigate(`/collections/${part.category}/${part.data.title}`, {
                state: part.data,
              });
            }}
          >
            <h3 className="font-semibold">{part.data.title}</h3>
            <p className="text-sm text-gray-600">{part.data.price}</p>
            <p className="text-xs text-gray-500">{part.data.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Navbar;
