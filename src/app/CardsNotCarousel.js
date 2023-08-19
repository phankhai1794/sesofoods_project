import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";

const CardsNotCarousel = (props) => {
    const {numberState} = props;

    return (
        <Row>
            {numberState && numberState.map(a => {
                return (
                    <Col lg={2} className={'element-card'}>
                        <Card style={{width: '100%'}}>
                            <Card.Img variant="top" src="images/chiphilogistics.jpeg"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
};

export default CardsNotCarousel;