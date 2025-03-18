import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

export default function SimpleSlider({ onSelect, selectedCard, setSelectedCard,target }) {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
  };

  const cards = [
      { id: 'dailyhoroscope', title: 'Daily Horoscope', desc: 'Your daily horoscope preview', img: '../src/images/surprised_nikon.png' },
      { id: 'shirtcolor', title: 'Lucky Shirt Colour', desc: 'Discover your lucky colour', img: '../src/images/surprised_nikon.png' },
      { id: 'luckyitem', title: 'Lucky Item', desc: 'Find out your lucky item', img: '../src/images/surprised_nikon.png' },
      { id: 'sacredmap', title: 'Sacred Map', desc: 'Unveil your sacred map', img: '../src/images/surprised_nikon.png' },
  ];

  return (
      <div ref ={target} className="slider">
          <Slider {...settings}>
              {cards.map((card) => (
                  <div
                      key={card.id}
                      onClick={() => {
                          setSelectedCard(card.id);
                          onSelect(card.id);
                      }}
                  >
                      <Card
                          title={card.title}
                          desc={card.desc}
                          img={card.img}
                          isSelected={selectedCard === card.id}
                      />
                  </div>
              ))}
          </Slider>
      </div>
  )
}