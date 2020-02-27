import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-reveal";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto obcaecati illum",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto obcaecati illum",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto obcaecati illum"
    ],
    linkTo: ["http://a", "http://b", "http://c"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((_, index) => (
      <Zoom delay={this.state.delay[index]} key={[index]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[index]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[index]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase tickets"
                background="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[index]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
