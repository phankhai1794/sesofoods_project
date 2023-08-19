import React from 'react';
import Home from "./app/Home";
import {NavbarComponent, OffcanvasExample} from "./app/NavbarComponent";
import CarouseImage from "./app/CarouseImage";
import Cards from "./app/Cards";
import {Container} from "react-bootstrap";

const TemplateDemo = () => {
    return (
        <div className='template-demo'>
            <Container>
                <Home />
                <h5>Navbar Normal</h5>
                <NavbarComponent />
                <h5>Navbar Navigation</h5>
                <OffcanvasExample />
                <h5>Carousel</h5>
                <CarouseImage />
                <h5>Cards</h5>
                <Cards numberDisplayInOneLine={6} />
            </Container>
        </div>
    );
};

export default TemplateDemo;