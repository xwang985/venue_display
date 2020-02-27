import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Description extends Component {
  state = {};
  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <h2>Highlights</h2>
          <div className="highlight_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
            repudiandae cupiditate atque optio in reprehenderit omnis quisquam
            quis porro? Veritatis esse voluptates tenetur minima error ea quod
            quos quidem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero, aliquid. Dicta excepturi quia esse perferendis modi
            quibusdam. Harum dicta, doloremque eum, ex est vitae aliquid
            inventore hic voluptatem voluptates deleniti.
          </div>
        </div>
      </Fade>
    );
  }
}

export default Description;
