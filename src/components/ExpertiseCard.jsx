const ExpertiseCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 transition duration-300 ease-in-out transform border border-gray-100 rounded cursor-pointer bg-bg-shade hover:border-primary hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-heading">{title}</h3>
      <p className="text-body">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
