import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <div className="header">
      {/* Amazon name */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* search bar */}
      <div className="header__searchInput" type="text">
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* logo */}

      {/* Navbar */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}
