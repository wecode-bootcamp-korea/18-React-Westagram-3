import React from 'react';
import './Footer.scss';
import { INFO } from "./footerData";

class Footer extends React.Component {
  render() {
    return (
      <div> 
        <footer className="footer">
          <div className="insta-footer">
            {INFO.map(el => {
              return (
                <li key={el.id}>
                  <a href="/">{el.content}</a>
                </li>
              )
            })}
          </div>
          <span>© 2021 WESTAGRAM FROM @sunaaank</span>
        </footer>
      </div>
    );
  }
}


export default Footer;



