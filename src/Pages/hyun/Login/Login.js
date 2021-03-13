import React from "react";
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import "./Login.scss";

class LoginHyun extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      validate: false,
    };
  }

  signIn = (e) => {
    e.preventDefault();
    fetch("10.58.2.56:8000/account/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
  };

  handleInput = (e) => {
    console.log(
      "setState 실행 전 value값 >>>",
      e.target.name,
      ":",
      e.target.value
    );
    console.log("setState 실행 전 state >>>", this.state);

    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.setState({
          validate:
            this.state.id.includes("@") && this.state.pw.length >= 5
              ? true
              : false,
        });
      }
    );
  };

  render() {
    console.log("렌더 되는 state >>>", this.state);
    const { validate } = this.state;
    return (
      <div className="LoginHyun">
        <section className="borderBox">
          <h1 className="westagram">Westagram</h1>
          <form className="login">
            <input
              onChange={this.handleInput}
              name="id"
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleInput}
              name="pw"
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              onClick={(e) => this.signIn(e)}
              className={validate ? "btnOn" : "btnOff"}
            >
              로그인
            </button>
          </form>
          <a className="text" href="어디로가야하죠">
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </div>
    );
  }
}

export default LoginHyun;
