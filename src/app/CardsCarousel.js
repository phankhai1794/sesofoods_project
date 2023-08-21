import React, {useState} from "react";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import {AiOutlineShoppingCart} from "react-icons/ai";

const CardsCarousel = (props) => {
  const { numberState, cardInfo } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleHover = (index) => {
    setHoveredIndex(index)
  }
  const handleLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div className="notCarousel">
      <Slider {...settings}>
        {cardInfo && cardInfo.length
          ? cardInfo.map((item, index) => {
              return (
                <Card key={index} style={{ width: "100%", height: "100%", borderRadius: '0px' }}>
                  <div className={`card-image`} onMouseEnter={() => handleHover(index)}
                       onMouseLeave={() => handleLeave()}>
                    <Card.Img variant="top" src={`${item.img}`}
                    />
                    <div className={`icon-cart ${hoveredIndex === index ? 'isHover' : ''}`}><AiOutlineShoppingCart /></div>
                  </div>
                  <Card.Body>
                    <Card.Title>{`${item.cardTitle}`}</Card.Title>
                    <Card.Text>{''}</Card.Text>
                    <p style={{ color: 'red', fontWeight: 500 }}>{item.price}</p>
                  </Card.Body>
                </Card>
              );
            })
          : numberState &&
            numberState.map((a) => {
              return (
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src="images/chiphilogistics.jpeg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
      </Slider>
    </div>
  );
};

export default CardsCarousel;
