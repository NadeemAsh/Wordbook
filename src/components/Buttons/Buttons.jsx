import React from "react";
import { Button, withStyles } from "@material-ui/core";

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

const Buttons = () => {
  return <StyledButton>Search</StyledButton>;
};

export default Buttons;
