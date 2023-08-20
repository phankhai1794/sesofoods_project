import React, { useEffect, useState } from "react";
import "../App.css";
import CardsCarousel from "./CardsCarousel";
import CardsNotCarousel from "./CardsNotCarousel";

const Cards = ({ numberDisplayInOneLine, isSlider }) => {
  const [numberState, setNumber] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const imgListDemo = [
    {
      cardTitle: "Cafe Trung Nguyên",
      price: "45.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ca-phe-g7-1_900x.jpg?v=1643018956",
    },
    {
      cardTitle: "Mít Sấy Vinamit",
      price: "35.000đ",
      img: "https://sesofoods.com/cdn/shop/products/Sesofoods_MitsayVinamit_1080x.jpg?v=1671684255",
    },
    {
      cardTitle: "Cafe Trung Nguyên",
      price: "45.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ca-phe-g7-1_900x.jpg?v=1643018956",
    },
    {
      cardTitle: "Mít Sấy Vinamit",
      price: "35.000đ",
      img: "https://sesofoods.com/cdn/shop/products/Sesofoods_MitsayVinamit_1080x.jpg?v=1671684255",
    },
    {
      cardTitle: "Mít Sấy Vinamit",
      price: "35.000đ",
      img: "https://sesofoods.com/cdn/shop/products/Sesofoods_MitsayVinamit_1080x.jpg?v=1671684255",
    },
    {
      cardTitle: "Bánh Trứng Tip",
      price: "65.000đ",
      img: "https://sesofoods.com/cdn/shop/products/sesofoods-banh-trung-tipo_1_1080x.jpg?v=1606032487",
    },
    {
      cardTitle: "Cafe Trung Nguyên",
      price: "45.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ca-phe-g7-1_900x.jpg?v=1643018956",
    },
    {
      cardTitle: "Mít Sấy Vinamit",
      price: "35.000đ",
      img: "https://sesofoods.com/cdn/shop/products/Sesofoods_MitsayVinamit_1080x.jpg?v=1671684255",
    },
    {
      cardTitle: "Ngô Nếp Cay",
      price: "25.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ngo-nep-cay-0_655ac9e1c2094f68b455e076ae0f94b5_medium_c15a87e1-a496-4aef-9f4d-12195aff2338_1080x.png?v=1609238067",
    },
    {
      cardTitle: "Ngô Nếp Cay",
      price: "25.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ngo-nep-cay-0_655ac9e1c2094f68b455e076ae0f94b5_medium_c15a87e1-a496-4aef-9f4d-12195aff2338_1080x.png?v=1609238067",
    },
    {
      cardTitle: "Ngô Nếp Cay",
      price: "25.000đ",
      img: "https://sesofoods.com/cdn/shop/products/ngo-nep-cay-0_655ac9e1c2094f68b455e076ae0f94b5_medium_c15a87e1-a496-4aef-9f4d-12195aff2338_1080x.png?v=1609238067",
    },
    {
      cardTitle: "Bánh Trứng Tip",
      price: "65.000đ",
      img: "https://sesofoods.com/cdn/shop/products/sesofoods-banh-trung-tipo_1_1080x.jpg?v=1606032487",
    },
  ];
  useEffect(() => {
    if (numberDisplayInOneLine) {
      const cardList = [];
      const numberState = [];
      for (let i = 0; i < numberDisplayInOneLine; i++) {
        numberState.push(i);
        cardList.push({
          cardNo: i,
          cardTitle: imgListDemo[i].cardTitle,
          price: imgListDemo[i].price,
          img: imgListDemo[i].img,
        });
      }
      setCardInfo(cardList);
      setNumber(numberState);
    }
  }, [numberDisplayInOneLine]);

  return (
    <div className={"style-cards"}>
      {isSlider ? (
        <CardsCarousel numberState={numberState} cardInfo={cardInfo}/>
      ) : (
        <CardsNotCarousel cardInfo={cardInfo} />
      )}
    </div>
  );
};

export default Cards;
