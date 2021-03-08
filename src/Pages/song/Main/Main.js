import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Main.scss";
import Nav from "./Nav/Nav";
import Aside from "./Aside/Aside";
import Feeds from "./Feeds/Feeds";
import imgProfile from "../../../../src/images/songhee/myprofile.jpg";
import imgFeed from "../../../../src/images/songhee/pic.jpg";

class Mmain extends Component{
    render(){
        return(
            <main>
            <div className="main-center">
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
            <Feeds/>
            </div>
            <Aside/>
            </main>        )
    }
}
class Main extends Component{
    render(){
        return(
            <div className="Main">
                <Nav />
                <Mmain />
            </div>
        )
    }
}
export default Main;