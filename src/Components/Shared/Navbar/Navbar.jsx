import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { routes } from "../../../Utils/menu";
import logo from "../../../assets/logo/logo-white.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%] lg:flex lg:justify-between lg:items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-black lg:before:bg-transparent before:z-[-1] shadow-xl shadow-gradient-back ">
      <a href="/" className="text-4xl text-white font-bold">
        <img src={logo} alt="Brand logo" />
      </a>
      <label
        htmlFor=""
        className="text-4xl text-white cursor-pointer lg:hidden absolute right-[5%] inline-flex duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </label>
      {/* Navbar Section  */}
      <nav
        className={`${
          isOpen ? "h-[17 rem]" : " h-0 overflow-hidden "
        } top-full  absolute left-0 w-full bg-black shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
      >
        <ul className="lg:flex gap-6">
          {routes?.map((route) => (
            <li
              key={route?.id}
              className={`${
                isOpen
                  ? "translate-y-0 transition-all duration-300"
                  : "translate-y-[-50px] transition-all duration-700"
              } text-white font-medium text-lg lg:text-xl my-[1.5rem] lg:my-0 mx-0 lg:ml-10 block text-center duration-500 transition lg:translate-y-0 `}
            >
              <NavLink to={route?.path} className=" px-2 py-3 block">
                {route?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="/"
        className="hover:bg-white hover:text-yellow-700 border-2 rounded-xl text-lg lg:text-xl capitalize font-bold text-white px-5 py-2 ml-5 md:ml-[200px] lg:ml-0"
      >
        Open app
      </a>
    </header>
  );
};

export default NavBar;
