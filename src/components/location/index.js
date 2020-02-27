import React, { Component } from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.698440449938!2d-79.38288808482804!3d43.654442060368986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb510746bd%3A0x8b89147b8cbbc837!2sCF%20Toronto%20Eaton%20Centre!5e0!3m2!1sen!2sca!4v1582786542661!5m2!1sen!2sca"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullscreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
