import React from "react";
import "./Header.css";
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="heading">
      <Typewriter
        onInit={(text)=>{
          text.typeString('Wordbook..').start();
        }}
      />
    </div>
  );
};

export default Header;
