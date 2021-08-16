import React from "react";
import "./BackgroundCard.css";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import Carousel from '../Carousel/Carousel'
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";

const BackgroundCard = () => {
  return (
    <div className="wrapper">
      <div className="card-container">
        <hr className="fancy" />

        <Input />
        <Buttons />

        <hr className="divider" />

        <div className="result-card">
          <div className="flex-wrapper">
            <span className="result">Hello</span>
            <VolumeUpRoundedIcon
              onClick={() => {
                alert("clicked");
              }}
              className="phonetics"
            />
          </div>
          <hr className="divider" />
          <div className="synonyms-wrapper">
            <h6>Synonyms :</h6>
            <Carousel/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
