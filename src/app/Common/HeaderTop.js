import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiPhone, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col className="text-start">
          <BiPhone />
          <a
            href="tel:098-999-9999"
            style={{ textDecoration: "none", color: "black", fontSize: "12px" }}
          >
            098 999 9999
          </a>
          <BiMailSend className="m-1"/>
          <a
            href="mailto:example@email.com"
            style={{
              textDecoration: "none",
              color: "gray",
              fontStyle: "italic",
              fontSize: "12px",
            }}
          >
            example@email.com
          </a>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <Button variant="outline-success" size="sm">
            {"ĐĂNG KÍ TÀI KHOẢN"}
          </Button>
        </Col>
        <Col className="text-end">
          <a href="#" alt="" style={{ color: "black"}}>
            <CiFacebook className="icon-header" />
          </a>
          <a href="#" alt="" style={{ color: "black"}}>
            <CiYoutube className="icon-header" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
