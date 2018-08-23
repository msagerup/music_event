import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import HighLight from './components/highLights';
import Pricing from './components/pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '2200px', background: '#fff' }}>
        <Header />
        <Featured />
        <VenueNfo />
        <HighLight />
        <Pricing />
      </div>
    );
  }
}

export default App;
