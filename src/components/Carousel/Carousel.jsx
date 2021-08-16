import React from "react";
import CarouselSlider from "react-material-ui-carousel";
import './Carousel.css'

const Carousel = () => {
  var items = [
    {
      word: "greeting",
    },
    {
      word: "welcome",
    },
    {
      word: "salutation",
    },
    {
      word: "saluting",
    },
    {
      word: "hailing",
    },
    {
      word: "address",
    },
  ];
  return (
    <CarouselSlider
    interval="5000"
    swipe="false"
    cycleNavigation="true"
    >
      {items.map((item, i) => (
        <Chip key={i} word={item} />
      ))}
    </CarouselSlider>
  );
};

function Chip(props) {
  return <h1 className="carousel-text">{props.word.word}</h1>;
}

export default Carousel;
