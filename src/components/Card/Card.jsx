import React, { useState } from "react";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import CarouselSlider from "react-material-ui-carousel";
import "./Card.css";

const Card = ({ data, synonyms }) => {

  return (
    <div className="result-card">
      <span className="result">{data.word}</span>
      <div className="flex-wrapper">
        <span className="phonetics-text">{data.phonetic}</span>
        <VolumeUpRoundedIcon className="phonetics-icon" />
      </div>
      <hr className="divider" />
      <div className="synonyms-wrapper">
        <h6>Synonyms :</h6>
        <CarouselSlider
          interval="5000"
          swipe="false"
          cycleNavigation="true"
          indicators="false"
          navButtonsAlwaysInvisible="true"
        >
          {synonyms.map((item) => (
            <Chip word={item} />
          ))}
        </CarouselSlider>
      </div>
    </div>
  );
};

function Chip(props) {
  return <h1 className="carousel-text">{props.word}</h1>;
}

export default Card;
