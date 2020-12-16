import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__text">netflix</span>
          <span>roulette</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
