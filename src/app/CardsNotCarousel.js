import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardsNotCarousel = (props) => {
  const { cardInfo } = props;

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
                <div className='card-image'>
                  <Card.Img variant="top" src={`${item.img}`} />
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
