import image from "../assets/about.png";

const About = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-12">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <img src={image} alt="About Me" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <span className="text-primary">About</span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-heading">
            About Me
          </h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p className="text-gray-600">
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
