import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

export default function SimpleSlider(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
      };
    
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <Card title="Daily Horoscope" desc="Your daily horoscope preview" img="../src/images/surprised_nikon.png"/>
          </div>
          <div>
            <Card title="Lucky Shirt Colour" desc="Discover your lucky colour" img="../src/images/surprised_nikon.png"/>
          </div>
          <div>
            <Card title="Lucky Item" desc="Find out your lucky item" img="../src/images/surprised_nikon.png"/>
          </div>
          <div>
            <Card title="Sacred Map" desc="Unveil your sacred map" img="../src/images/surprised_nikon.png"/>
          </div>
        </Slider>
      </div>
    )
}