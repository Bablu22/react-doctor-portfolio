import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className="w-full bg-white border-b shadow-lg">
      <div className="container flex items-center justify-between h-24 px-4 mx-auto text-body">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-36" />
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 m-2 duration-300 cursor-pointer hover:text-black"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <img src={logo} alt="logo" className="w-full p-4" />

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 duration-300 border-b border-gray-400 cursor-pointer hover:bg-body hover:text-white"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
