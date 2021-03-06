import React from 'react';
import Nav from './Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import './Main.scss';
import './Nav/Nav.scss';
import './MainLeft/MainLeft.scss';
import './MainRight/MainRight.scss';

class Main extends React.Component {
  render() {
    return (
      <section className="main-container">
        <Nav />
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </section>
    );
  }
}

export default Main;
