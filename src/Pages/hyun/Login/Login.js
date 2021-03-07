import React from "react";
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHyun extends React.Component{
    constructor() {
        super();
        this.state = {
            id : "",
            pw : "" 
        }
    }

    handleIdInput = (e) => {
    this.setState({
        id : e.target.value
    })
    }
    
    handlePwInput = (e) => {
    this.setState({
        pw : e.target.value
    })
}


render(){
    // console.log('this.state >>>', this.state)
        return(
            <div className="LoginHyun">
                <section className="borderBox">
                    <h1 className="westagram">Westagram</h1>
                    <form className="login">
                        <input onChange={this.handleIdInput} id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input onChange={this.handlePwInput} id="password" type="password" placeholder="비밀번호" />
                    <button className="btn">로그인</button>
                    </form>
                    <a className="text" href="어디로가야하죠">비밀번호를 잊으셨나요?</a>
                </section>
            </div>
        )
    }
}
export default LoginHyun;