import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FooterList } from "./FooterList";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="footer-nav">
          {FooterList.map(list => {
            return (
              <li key={list.id} className="footer-list">
                <Link>{list.title}</Link>
              </li>
            );
          })}
        </ul>
        <p>© 2021 WESTAGRAM FROM SEUNGOK</p>
      </footer>
    );
  }
}

export default Footer;
