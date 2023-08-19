import React from 'react';
import {Button, Card} from "react-bootstrap";
import Slider from "react-slick";

const CardsCarousel = (props) => {
    const {numberState} = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 1,
        slidesToShow: 6,
        slidesToScroll: 6,
    };

    return (
        <div className='notCarousel'>
            <Slider {...settings}>
                {numberState && numberState.map(a => {
                    return (
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
                    )
                })}
            </Slider>
        </div>
    );
};

export default CardsCarousel;