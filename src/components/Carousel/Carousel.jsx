import React, { useState } from "react";
import CarouselSlider from "react-material-ui-carousel";
import "./Carousel.css";

const Carousel = ({ synonyms, status }) => {
  const [list, setList] = useState(["Nothing Searched"]);
  if(status === true){
    setList(synonyms);
  }
  return (
    <CarouselSlider interval="5000" swipe="false" cycleNavigation="true">
      {list.map((item) => (
        <Chip word={item} />
      ))}
    </CarouselSlider>
  );
};

function Chip(props) {
  return <h1 className="carousel-text">{props.word}</h1>;
}

export default Carousel;
