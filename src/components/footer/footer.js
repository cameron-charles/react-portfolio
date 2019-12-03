import React from "react";

import logo from "../../../static/assets/images/cam-logo-white.png";

const FooterContainer = props => {
  return (
    <div className="footer-container">
      <img src={logo} />
      <h2>Cameron Zollinger 2019</h2>
    </div>
  );
};

export default FooterContainer;