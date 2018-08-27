import React, { Component } from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import HighLight from './components/highLights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '2200px', background: '#fff' }}>
        <Element name="start">
          <Header />
        </Element>
        <Featured />
        <Element name="info">
          <VenueNfo />
        </Element>
        <Element name="highlight">
          <HighLight />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
