const Card = ({ title, description, svg }) => {
  return (
    <div className="card-container">
      <div className="text-container">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-gray-500 mt-4">{description}</p>
      </div>
      <img src={`img/${svg}`} alt="Supervisor Icon" />
    </div>
  );
};

export default Card;
