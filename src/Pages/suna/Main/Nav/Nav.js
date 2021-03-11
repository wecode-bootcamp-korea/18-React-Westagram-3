import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <section className="nav-box">
          <h1 className="logo">Westagram</h1>
          <input type="search" placeholder="검색" className="nav-search" />
          <div className="nav-btns">
            <div className="nav-btn">
              <i className="fas fa-home" />
            </div>
            <div className="nav-btn">
              <i className="far fa-paper-plane" />
            </div>
            <div className="nav-btn">
              <i className="far fa-compass" />
            </div>
            <div className="nav-btn">
              <i className="far fa-heart" />
            </div>
            <div className="nav-btn">
              <img
                alt="profile menu"
                src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                className="menu-img"
              />
            </div>
          </div>
        </section>
      </nav>
    );
  }
}


export default Nav;


