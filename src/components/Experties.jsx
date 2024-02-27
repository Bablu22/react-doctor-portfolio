import ExpertiseCard from "./ExpertiseCard";
import Heading from "./Heading";
import {
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
} from "react-icons/fa";

const Experties = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-12">
      <div className="container mx-auto">
        <Heading title="My Expertise" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ExpertiseCard
            icon={<FaStethoscope className="text-4xl text-blue-500" />}
            title="General Medicine"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ExpertiseCard
            icon={<FaHeartbeat className="text-4xl text-red-500" />}
            title="Cardiology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ExpertiseCard
            icon={<FaMicroscope className="text-4xl text-green-500" />}
            title="Microbiology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ExpertiseCard
            icon={<FaUserMd className="text-4xl text-purple-500" />}
            title="Pediatrics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default Experties;
