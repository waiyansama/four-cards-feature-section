const Card = ({ title, description, svg, number }) => {
 
  const style = () => {
    if (number === 1) {
      return { borderColor: "#EA5353" };
    } else if (number === 2) {
      return { borderColor: "#45D3D3" };
    } else if (number === 3) {
      return { borderColor: "#FCAF4A" };
    } else if (number === 4) {
      return { borderColor: "#549EF2" };
    }
  };

  // const style = {
  //   borderColor: number === 1 ? "#EA5353" : "",
  //   borderColor: number === 2 ? "#45D3D3" : "",
  //   borderColor: number === 3 ? "#FCAF4A" : "",
  //   borderColor: number === 4 ? "#549EF2" : "",
  // };

  return (
    <div className={`card`} style={style()}>
      <div className="text-container">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-gray-500 mt-4">{description}</p>
      </div>
      <img src={`img/${svg}`} alt="Supervisor Icon" />
    </div>
  );
};

export default Card;
