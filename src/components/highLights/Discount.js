import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/Button';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  procentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };
  // Set counting time up
  componentDidUpdate() {
    setTimeout(() => {
      this.procentage();
    }, 35);
  }

  render() {
    const { discountStart, discountEnd } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.procentage()}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th October</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                cumque nam sequi soluta, in doloribus dolores, vitae blanditiis
                est deleniti mollitia laudantium perferendis consectetur animi
                atque eveniet fugiat laboriosam eius?
              </p>

              <div className="button">
                <MyButton
                  text="Purchase Tickets"
                  bck="red"
                  color="#ffffff"
                  link="www.google.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
