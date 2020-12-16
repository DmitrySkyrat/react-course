import React from "react";
import "./Header.scss";

export const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
        <div className="header__title">
          <div className="header__logo">
            <span className="header__logo-text">netflix</span>
            roulette
          </div>
          <button className="header__add-movie-btn">+ add movie</button>
        </div>
        <div className="header__search">
          <input className="header__search-field" type="text" placeholder="What do you want to watch?" />
          <button className="header__search-button">search</button>
        </div>
    </div>
  );
};
