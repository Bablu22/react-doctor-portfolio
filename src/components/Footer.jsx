import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-4 py-8 md:px-12 text-heading bg-bg-shade">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div>
          <ul className="flex flex-wrap space-x-6 md:space-x-12">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p className="text-xs text-heading">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
