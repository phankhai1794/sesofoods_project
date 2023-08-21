import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, Offcanvas, Button} from "react-bootstrap";
import {BiUser} from "react-icons/bi";
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="sm" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export const OffcanvasExample = () => {
    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        {/*Logo*/}
                        <div>
                            <Navbar.Brand href="#">
                            <img className='logo-header' src="https://sesofoods.com/cdn/shop/files/Logo_In_MenuTab_1_1_761x.png?v=1647610647" alt=""/>
                            </Navbar.Brand>
                        </div>

                        {/*Danh Mục, Hỗ trợ, Tin tức*/}
                        <NavDropdown
                            title="Danh Mục"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            className='nav-header-title'
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Hỗ Trợ"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Tin Tức"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        <div className='nav-item'>
                            <Nav.Link href="#action1">Về Chúng Tôi</Nav.Link>
                        </div>
                        {/*Toggle navbar responsive*/}
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {/*<NavDropdown*/}
                                    {/*    title="Dropdown"*/}
                                    {/*    id={`offcanvasNavbarDropdown-expand-${expand}`}*/}
                                    {/*>*/}
                                    {/*</NavDropdown>*/}
                                </Nav>
                                <Form className="d-flex justify-content-evenly align-items-center">
                                    <div className='input-search p-2'>
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 rounded-pill"
                                            aria-label="Search"
                                        />
                                        <div className='icon-search btn btn-link'>
                                            <h4><AiOutlineSearch /></h4>
                                        </div>
                                    </div>
                                    <h3 className="p-2"><BiUser /></h3>
                                    <h3 className="p-2"><AiOutlineHeart /></h3>
                                    <h3 className="p-2"><AiOutlineShoppingCart /></h3>
                                </Form>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>
                </Navbar>
            ))}
        </>
    )
}
