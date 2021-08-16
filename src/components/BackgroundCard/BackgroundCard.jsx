import React, { useState } from "react";
import "./BackgroundCard.css";
import {
  Button,
  withStyles,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import Card from "../Card/Card";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(90deg, #16222a 30%, #16222a 100%)",
    borderRadius: 6,
    border: 0,
    color: "white",
    width: "100%",
    height: 52,
    padding: "0 30px",
    boxShadow: "rgba(0, 0, 0, 0.44) 0px 3px 8px",
    fontFamily: "Raleway, sans-serif",
    fontSize: "16px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#16222a",
      fontFamily: "Raleway, sans-serif",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#16222a",
      fontFamily: "Raleway, sans-serif",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#16222a",
        fontFamily: "Raleway, sans-serif",
      },
      "&:hover fieldset": {
        borderColor: "#3a6073",
        fontFamily: "Raleway, sans-serif",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3a6073",
        fontFamily: "Raleway, sans-serif",
      },
    },
    margin: "22px 0px",
    width: "100%",
    fontFamily: "Raleway, sans-serif",
  },
})(TextField);

const Loader = withStyles({
  root: {
    color: "#16222A",
  },
})(CircularProgress);

const BackgroundCard = () => {
  const [data, setData] = useState(null);
  const [synonyms, setSynonyms] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [loader, setLoader] = useState(false);

  const getDataFromAPI = async () => {
    try {
      const data = await axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + textValue)
        .then((res) => {
          setData(res.data[0]);
          setSynonyms(res.data[0].meanings[0].definitions[0].synonyms);
        });
        setLoader(true);
    } catch (error) {
      console.log("Error- ", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="card-container">
        <hr className="fancy" />
        <StyledTextField
          label="Enter word here"
          variant="outlined"
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <StyledButton
          onClick={() => {
            if (textValue === "") {
              alert("Please Enter a word First");
            } else {
              getDataFromAPI();
            }
          }}
        >
          Search
        </StyledButton>
        <hr className="divider" />
        {data === null ? (
          <h3 className="no-res">Nothing Searched Yet</h3>
        ) : (loader ? (<Card data={data} synonyms={synonyms}/>): <Loader/>)}
      </div>
    </div>
  );
};

function Chip(props) {
  return <h1 className="carousel-text">{props.word}</h1>;
}

export default BackgroundCard;
