import React from "react";
import "./Main.scss";

class MainOk extends React.Component {
  render() {
    return (
      <>
        <Nav userData={UserData}></Nav>
        <section className="main">
          <main className="main-wrap">
            <MainContent userData={UserData}></MainContent>
          </main>
        </section>
        <div className="popup-wrap">
          <ul className="popup-select">
            <li className="select-type delete">삭제</li>
            <li className="select-type cancel">취소</li>
          </ul>
        </div>
      </>
    );
  }
}
export default MainOk;
