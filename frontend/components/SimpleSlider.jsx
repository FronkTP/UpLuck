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
        <Slider {...settings}>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
      </Slider>
    )
}