import React, { useState } from "react";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import ReactAudioPlayer from "react-audio-player";
import "./Card.css";

const Card = ({ data, synonyms }) => {
  //   const playPhonetic = (src) => {
  //     <ReactAudioPlayer
  //         src= "https://"+{data.phonetics[0].audio}
  //         autoPlay
  //     />;
  //   };

  return (
    <div className="result-card">
      <span className="title">{data.word}</span>
      <div className="flex-wrapper">
        <span className="phonetics-text">{data.phonetic}</span>
        <VolumeUpRoundedIcon
          className="phonetics-icon"
          onClick={() => {
            // playPhonetic();
          }}
        />
      </div>
      <hr className="divider" />
      <div>
        <span className="title">Origin: </span>
        <p className="details">
          {data.origin === undefined
            ? "No Origin Data Available "
            : data.origin}
        </p>
      </div>
      <hr className="divider" />
      <div>
        <span className="title">Meanings: </span>
        <div>
           <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur debitis dignissimos ducimus?</p>
        </div>
      </div>
    </div>
  );
};


function MeaningsCard(props){
    return(
        <>
        <div className="meanings-wrapper">
            <span>Parts of Speech: {props.data.partOfSpeech}</span>
        </div>
        </>
    )
}
export default Card;
