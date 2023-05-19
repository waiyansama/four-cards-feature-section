import Card from "./components/Card";
import Cards from "./Cards.js";
function App() {

   const cardsElements = Cards.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        description={card.description}
        svg={card.svg}
        number={card.id}
      />
    );
  });



  return (
    <div className="app-container">
      <h1 className="font-semibold text-2xl text-center md:text-4xl">
        <span className="font-light block text-textGrayishBlue mb-2">
          Reliable, efficient delivery
        </span>
        Powered by Technology
      </h1>

      <p className="text-center text-gray-500 mt-4 mb-14 md:text-2xl md:mt-8 md:w-550 mx-auto">
        Our Artificial intelligence powered tools use millions of projects data
        points to ensure that your projects is successful
      </p>
      <div className="card-container">
        {cardsElements}
      </div>
    </div>
  );
}

export default App;
