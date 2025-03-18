import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import { useRef } from 'react';

export default function SimpleSlider({ onSelect, selectedCard, setSelectedCard,target }) {

  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }




  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrow:false
  };

  const cards = [
      { id: 'dailyhoroscope', title: 'Daily Horoscope', desc: 'Your daily horoscope preview', img: '../src/images/surprised_nikon.png' },
      { id: 'shirtcolor', title: 'Lucky Shirt Colour', desc: 'Discover your lucky colour', img: '../src/images/surprised_nikon.png' },
      { id: 'luckyitem', title: 'Lucky Item', desc: 'Find out your lucky item', img: '../src/images/surprised_nikon.png' },
      { id: 'sacredmap', title: 'Sacred Map', desc: 'Unveil your sacred map', img: '../src/images/surprised_nikon.png' },
  ];

  return (
    <>
      <div className="slider-container">
        <button className="arrow-btn left" onClick={() => slider?.current?.slickPrev()}>
          <i className="arrow left"></i>
        </button>
        <div ref={target} className="slider">
          <Slider ref={slider} {...settings}>
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
        <button className="arrow-btn right" onClick={() => slider?.current?.slickNext()}>
          <i className="arrow right"></i>
        </button>
      </div>
    </>
  );

}