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
      />
    );
  });

  return (
    <div className="app-container">
      <h1 className="font-semibold text-2xl text-center">
        <span className="font-light block text-textGrayishBlue">
          Reliable, efficient delivery
        </span>
        Powered by Technology
      </h1>

      <p className="text-center text-gray-500 mt-4 mb-14">
        Our Artificial intelligence powered tools use millions of projects data
        points to ensure that your projects is successful
      </p>

      {cardsElements}
    </div>
  );
}

export default App;
