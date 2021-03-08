import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Login.scss";

class Login extends Component{
  constructor(){
    super();
    this.state ={
      idValid : false,
      pwValid : false
    };
    // this.handleLoginEnable = this.handleLoginEnable.bind(this);

  }
  handleValidId = (e) =>{
    const isValidLen = e.target.value.length>4 && e.target.value.indexOf("@")>-1;
    if(isValidLen) this.setState({idValid:true});
    else this.setState({idValid:false});
  }
  handleValidPw = (e) => {
    const isValidLen = e.target.value.length>4 ;
    if(isValidLen) this.setState({pwValid:true});
    else this.setState({pwValid:false});
  }

  render(){
    // console.log(this.state.idCheck);
    // console.log("idCheck:" + this.state.idCheck, "pwCheck:" + this.state.pwCheck);
    // console.log(this.state.idValid, this.state.pwValid );
      return(          
          <div className = "Login">
            <div className="main-box">
              <header className="logo big-logo">westagram</header>
              <div className="inner-box">
                <input onChange={this.handleValidId}  type="text" name="" id="loginId" placeholder="전화번호,사용자 이름 또는 이메일"/>
                <input onChange={this.handleValidPw} type="password" name="" id="passWord" placeholder="비밀번호" />
                <Link to="/main-song" ><button disabled={!( this.state.idValid && this.state.pwValid)} className='btnLogin'>
                  로그인
                </button></Link>
                <div className="line">
                  <div className="line-through"></div>
                  <div>또는</div>
                  <div className="line-through"></div>
                </div>
              </div>
              <a className="forget-pwd" href="./">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        )
    }
}
export default Login;