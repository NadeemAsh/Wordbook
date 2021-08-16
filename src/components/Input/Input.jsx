import React from "react";
import { TextField, withStyles } from "@material-ui/core";

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

const Input = () => {
  return <StyledTextField label="Enter word here" variant="outlined" />;
};

export default Input;
