import React, { Component } from 'react';
import { Link} from "react-router-dom";
import imgProfile from "../../../../../src/images/songhee/myprofile.jpg";

class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="logo small-logo"><Link to="/login-song">westagram</Link> </div>
                <div className="nav__search">
                    <i className="fas fa-search fa-sm"></i>
                    <input className="search__bar" type="text" placeholder="검색" />
                </div>
                <div className="nav__icons">
                    <i className="fas fa-house-user"></i>
                    <i className="fas fa-location-arrow"></i>
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <img className="imgMyprofile" src={imgProfile} alt="" />
                </div>
            </nav>

        )
    }
}

export default Nav;
