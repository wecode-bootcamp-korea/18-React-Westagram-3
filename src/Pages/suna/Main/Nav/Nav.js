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
              <i className="fas fa-home"></i>
            </div>
            <div className="nav-btn">
              <i className="far fa-paper-plane"></i>
            </div>
            <div className="nav-btn">
              <i className="far fa-compass"></i>
            </div>
            <div className="nav-btn">
              <i className="far fa-heart"></i>
            </div>
            <div className="nav-btn">
              <img
                src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                alt="profile menu"
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


