import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Experties from "../components/Experties";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Experties />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
