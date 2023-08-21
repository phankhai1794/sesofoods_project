import React from "react";
import Header from "../Common/Header";
import CarouselSlick from "../CarouselSlick";
import Cards from "../Cards";
import CardList from "../CardList";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselSlick />

      <Container>
        <div id="danhmuc-sanpham">
          <h2 style={{ color: "#228b22" }}>{"Danh Mục Sản Phẩm"}</h2>
          <Cards numberDisplayInOneLine={12} isSlider={true} />
        </div>

        <div id="uudai-tuannay">
          <h2 style={{ color: "#228b22" }}>{"Ưu Đãi Tuần Này"}</h2>
          <Cards numberDisplayInOneLine={12} isSlider={true} />
        </div>
      </Container>

      <div id="sanpham-hot">
        <Container>
          <h2 style={{ color: "#228b22" }}>{"Sản Phẩm Hot"}</h2>
          <Cards numberDisplayInOneLine={6} isSlider={false} />
          <Button as="a" variant="success">
            {"Xem Thêm ->"}
          </Button>
        </Container>
      </div>

      <div id="banh-keo-ngon">
        <Container>
          <CardList title={"BÁNH KẸO NGON"} />
        </Container>
      </div>

      <div id="combo-tiet-kiem">
        <Container>
          <CardList title={"COMBO TIẾT KIỆM"} isSlider={true} />
        </Container>
      </div>
    </div>
  );
};

export default Home;
