import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import MyButton from "../utils/MyButton";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({ discountStart: discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, this.state.discountEnd);
  }

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade left onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase before March</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ab
                voluptas quis non repellat quo modi accusamus, eveniet unde
                distinctio ratione molestias ullam praesentium nisi officia
                tempora voluptate, voluptates aperiam!
              </p>
              <MyButton
                text="Purchase Ticket"
                background="#ffa800"
                color="#ffffff"
                link="https://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
