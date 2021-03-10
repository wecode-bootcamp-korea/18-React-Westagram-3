import React, { Component } from "react";
import imgProfile from "../../../../../src/images/songhee/myprofile.jpg";
import "./Stories.scss";

class Stories extends Component {
  render() {
    return (
      <div className="stories">
        <div className="story">
          <img className="story__img" src={imgProfile} alt="" />
          <span className="story__id">songhee</span>
        </div>
        <div className="story">
          <img className="story__img" src={imgProfile} alt="" />
          <span className="story__id">songhee</span>
        </div>
      </div>
    );
  }
}

export default Stories;
