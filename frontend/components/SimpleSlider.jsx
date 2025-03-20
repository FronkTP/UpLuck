import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import { useRef } from 'react';

export default function SimpleSlider({ onSelect, selectedCard, setSelectedCard,target }) {
  const slider = useRef(null);
 
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
      { id: 'dailyhoroscope', title: 'ดวงประจำวัน', desc: 'เข้ามาดูดวงประจำวันของคุณได้เลย!', img: '/images/surprised_nikon.png' },
      { id: 'shirtcolor', title: 'สีเสื้อมงคล', desc: 'วันนี้ใส่เสื้อสีอะไรดีนะ?', img: '/images/surprised_nikon.png' },
      { id: 'luckyitem', title: 'ของนำโชค', desc: 'วันนี้พกอะไรออกจากบ้านดีนะ?', img: '/images/surprised_nikon.png' },
      { id: 'sacredmap', title: 'แผนที่สถานที่ศักดิ์สิทธิ์', desc: 'ตามหาสถานที่ศักดิ์สิทธิ์กัน!', img: '/images/surprised_nikon.png' },
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