import React from 'react';
import Carrusel from './Carrusel';
import CountDown from './CountDown';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrusel />
      <div className="artist_name">
        <div className="wrapper">6lack</div>
      </div>
      <CountDown />
    </div>
  );
};

export default Featured;
