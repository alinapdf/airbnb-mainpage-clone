import Card from "./Card/Card";
import cardsData from "./../data/data.json";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__cards">
          {cardsData.map((card, index) => {
            return (
              <Card
                key={index}
                location={card.location}
                desc={card.desc}
                rating={card.rating}
                pricePerNight={card.price_per_night}
                datesAvailable={card.dates_available}
                img={card.img}
                img2x={card.img2x}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
