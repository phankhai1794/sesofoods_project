import React, {useEffect, useState} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import "../App.css";

const Cards = ({ numberDisplayInOneLine }) => {
    const [numberState, setNumber] = useState([]);

    useEffect(() => {
        if (numberDisplayInOneLine) {
            const numbers = [];
            for (let i = 0; i < numberDisplayInOneLine; i++) {
                numbers.push(i);
            }
            setNumber(numbers);
        }
    }, [numberDisplayInOneLine]);

    return (
        <div className={'style-cards'}>
            <Row>
                {numberState && numberState.map(a => {
                    return (
                        <Col lg={2} className={'element-card'}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/chiphilogistics.jpeg" />
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
        </div>
    );
};

export default Cards;