import React, {useState} from "react";
import { Card, Col, Row } from "react-bootstrap";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";

const CardsNotCarousel = (props) => {
  const { cardInfo } = props;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleHover = (index) => {
    setHoveredIndex(index)
  }
  const handleLeave = () => {
    setHoveredIndex(null)
  }
  return (
    <Row>
      {cardInfo &&
        cardInfo.map((item, index) => {
          return (
            <Col
              key={index}
              xl={2}
              lg={3}
              md={3}
              sm={4}
              className={"element-card p"}
            >
              <Card style={{ width: "100%", height: "100%", borderRadius: '0px'}}>
                <div className='card-image' onMouseEnter={() => handleHover(index)}
                     onMouseLeave={() => handleLeave()}>
                  <div className={`icon-heart ${hoveredIndex === index ? 'isHoverHeart' : ''}`}><AiOutlineHeart /></div>
                  <div className='imag-hover'>
                    <Card.Img variant="top" src={`${item.img}`} />
                  </div>
                  <div className={`icon-cart ${hoveredIndex === index ? 'isHover' : ''}`}><AiOutlineShoppingCart /></div>
                </div>
                <Card.Body>
                  <Card.Title>{`${item.cardTitle}`}</Card.Title>
                  <Card.Text>{''}</Card.Text>
                  <p style={{ color: 'red', fontWeight: 500 }}>{item.price}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default CardsNotCarousel;
