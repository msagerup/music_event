import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class CountDown extends Component {
  state = {};

  render() {
    return (
      <Slide left delay={1200}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts in </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">2</div>
              <div className="countdown_tag">Hours</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">29</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default CountDown;
