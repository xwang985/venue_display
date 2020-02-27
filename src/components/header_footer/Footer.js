import React, { Component } from "react";
import { Fade } from "react-reveal";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="bck_red">
        <Fade dealy={500}>
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            The Venue 2020. All rights reserved
          </div>
        </Fade>
      </footer>
    );
  }
}

export default Footer;
