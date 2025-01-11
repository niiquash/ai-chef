import React from "react";
import ChefIcon from "../assets/chef-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={ChefIcon} alt="chef icon" className="header--logo" />
      <span className="header--logo__text">AI Master Chef</span>
    </header>
  );
};

export default Header;
