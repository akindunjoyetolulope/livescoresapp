import React from "react";

import classes from "./Header.module.css";
import headerImage from "../assets/header.jpg";

const Header = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={headerImage} alt="headerImage" />
    </div>
  );
};

export default Header;
