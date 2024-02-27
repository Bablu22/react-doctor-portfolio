import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ quote, author, position }) => {
  return (
    <div className="p-6 border rounded-lg border-primary">
      <div className="flex items-start mb-4">
        <FaQuoteLeft className="mt-1 mr-2 text-3xl text-gray-400" />
        <p className="text-gray-800">{quote}</p>
      </div>
      <p className="mb-2 text-gray-600">{author}</p>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};
export default TestimonialCard;
