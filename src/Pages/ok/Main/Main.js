import React from "react";
import Nav from "./Components/Nav/Nav";
import MainContent from "./Components/MainContent/MainContent";
import UserData from "./Data/UserData";
import "./Main.scss";
import "./Mobile.scss";

class MainOk extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav userData={UserData}></Nav>
        <section className="main-section">
          <main className="main-wrap">
            <MainContent userData={UserData}></MainContent>
          </main>
        </section>
      </div>
    );
  }
}
export default MainOk;
