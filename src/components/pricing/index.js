import React, { Component } from 'react';
import MyButton from '../utils/Button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium porta diam, a maximus ex scelerisque in. Aenean a purus luctus, placerat neque vel, cursus felis. Aenean pellentesque magna quis enim pulvinar gravida. Sed magna lorem, placerat vel metus sit amet, aliquet euismod mauris. Integer ut pretium augue. Donec nec sem id massa fermentum tincidunt. Phasellus cursus, eros in mattis consequat, metus purus convallis libero, sed accumsan leo tellus sit amet urna. Proin scelerisque leo nisl. Aenean non varius mauris, eget egestas metus.',
      'Aliquam eget sapien a lacus porta pharetra vel a sem. Phasellus suscipit tellus ligula, at fermentum nisi scelerisque vel. Morbi congue, eros eget tempus auctor, metus justo lobortis leo, ac elementum lorem tortor quis magna. Curabitur nec condimentum ipsum. Donec in urna ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum bibendum cursus risus eu euismod. Pellentesque dolor nulla, rutrum eu urna non, ultrices dapibus enim. Nullam at diam nunc. Vivamus auctor fringilla lobortis. Proin pharetra, ante eu lacinia posuere, sem leo convallis turpis, eget rutrum est nunc eu enim. Nullam posuere ullamcorper nisl, sit amet sagittis felis aliquet vitae. Donec ac imperdiet nulla. Donec et nisl sodales leo dignissim sollicitudin.',
      'Duis ac sagittis dolor, cursus vehicula nisi. Ut non sodales nibh. Ut ac iaculis justo, sed feugiat mi. Donec dui mauris, imperdiet ut tincidunt ac, pulvinar at magna. Morbi facilisis rhoncus consectetur. Nulla ut mauris nisl. Sed pretium elit bibendum, ultricies quam at, malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ut risus nec turpis ornare cursus at ut mauris. Nunc auctor massa eros, eget finibus est semper eget. Nam condimentum blandit quam, volutpat convallis nisl laoreet at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id turpis in massa euismod varius sed ut nunc. Suspendisse porttitor, ipsum a dapibus blandit, nisi felis pharetra metus, quis porttitor neque metus in arcu. Quisque ultrices quis libero vehicula ultricies.'
    ],
    linkto: [
      'https://www.ticketmaster.no/b',
      'https://www.ticketmaster.no/m',
      'https://www.ticketmaster.no/s'
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="princing_buttons">
              <span>
                <MyButton
                  text="Purchase"
                  bck="orange"
                  color="#fff"
                  link={this.state.linkto[i]}
                />
              </span>
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
