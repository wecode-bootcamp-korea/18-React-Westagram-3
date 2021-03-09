import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Login.scss';

class LoginSuna extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      ready: "",
    };
  }

  goToMain = () => {
    if(this.state.ready === true){
      this.props.history.push('/main-suna');
      } else {
        alert("아이디와 비밀번호를 확인해주세요")
        this.props.history.push('/login-suna');
      }
  };
  
  handleInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name] : value,
      ready : this.state.pw.length>5 && this.state.email.includes("@") ? true : false
    });
  };

  render() {
    return (
      <div className="background">
        <section className="login-page">
          <div className="logo">
            <h1>
              <a href="https://wecode.co.kr">Westagram</a>
            </h1>
          </div>

          <form className="login-box" id="loginForm" method="post" action="#">
            <div>
              <div className="input-box">
                <input
                  name="email"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일
                  "
                  className="login data"
                  id="user"
                  autoComplete="off"
                  onChange={this.handleInputValue}
                />
                <input
                  name="pw"
                  type="password"
                  placeholder="비밀번호"
                  className="login data"
                  id="password"
                  autoComplete="off"
                  onChange={this.handleInputValue}
                />
              </div>
              <div className="button-box">
                <button type="submit" 
                className={this.state.ready ? 
                  "login button active" : "login button"}
                onClick={this.goToMain}
                >
                  <Link to="/main-suna">로그인</Link>
                </button>
              </div>
            </div>
          </form>
          <div className="find-password" onClick={this.goToMain}>
            <Link to="/main-suna">비밀번호를 잊으셨나요?</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginSuna);