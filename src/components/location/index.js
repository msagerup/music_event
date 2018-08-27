import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5657.549158906086!2d10.753934108048952!3d59.911469777530804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61cee4e1bf%3A0xeaab41e737da924c!2sOslo+Spektrum!5e0!3m2!1sen!2sno!4v1535306824758"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
