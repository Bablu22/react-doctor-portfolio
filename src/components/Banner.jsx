import logo from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="px-4 py-12 bg-bg-shade md:px-12">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="md:w-1/2">
          <h6 className="text-sm font-medium text-heading md:text-base">
            Welcome to Dr. John Portfolio
          </h6>
          <h2 className="mt-2 mb-4 text-2xl font-bold text-heading md:text-4xl md:mt-4 md:mb-6">
            Advancing <span className="text-primary"> Healthcare Through </span>
            Expertise and Compassion
          </h2>
          <p className="mb-4 text-sm text-body md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="px-4 py-2 text-sm text-white rounded bg-primary md:text-base hover:bg-indigo-500 hover:text-white">
            Get In Touch
          </button>
        </div>
        <div className="p-2 mt-6 md:w-1/2 md:mt-0">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
