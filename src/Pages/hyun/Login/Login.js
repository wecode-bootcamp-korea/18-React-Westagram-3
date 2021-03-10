import React from "react";
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHyun extends React.Component {
  constructor() {
    super();
    this.state = {
      id : "",
      pw: "",
      validate: false
    }}

  signIn = (e) => {
    e.preventDefault();
    fetch("http://10.58.4.167:8000/users/signup ", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result))
  }

  handleIdInput =async(e)=> {
    await this.setState({
      id: e.target.value,
      validate: this.state.id.includes('@') && this.state.pw.length >= 5 ? true : false,
    })
  }
  
  handlePwInput =async(e) => {
   await this.setState({
      pw: e.target.value,
      validate: this.state.id.includes('@') && this.state.pw.length >= 5 ? true : false
    })
  }

  render() {
    const { validate } = this.state;
    return (
      <div className="LoginHyun">
        <section className="borderBox">
          <h1 className="westagram">Westagram</h1>
          <form className="login">
            <input onChange={this.handleIdInput} className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input onChange={this.handlePwInput} className="password" type="password" placeholder="비밀번호" />
            <button onClick={(e) => this.signIn(e)} className={validate ? 'btnOn' : 'btnOff'}>로그인</button>
          </form>
          <a className="text" href="어디로가야하죠">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    )}}

export default LoginHyun;