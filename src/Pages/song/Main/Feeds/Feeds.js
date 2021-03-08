import React, { Component } from 'react';
import imgProfile from "../../../../../src/images/songhee/myprofile.jpg";
import imgFeed from "../../../../../src/images/songhee/pic.jpg";

class Feeds extends Component {
    render() {
        return (

            <div className="feeds">
            <article className="feed">
                <div className="feed__head">
                <div className="feed__head__left">
                    <img className="feed__head__img" src={imgProfile} alt="" />
                    <span className="feed__head__id">songhee</span>
                </div>
                <i className="fas fa-ellipsis-h"></i>
                </div>
                <img className="feed__img" src={imgFeed} alt="" />
                <div className="feed__icons inPad">
                <span className="feed__icons__left">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="fas fa-location-arrow"></i>
                </span>
                <span className="feed__icons__right">
                    <i className="far fa-bookmark"></i>
                </span>
                </div>
                <div className="feed__like inPad">
                좋아요<span className="feed__like__num">300</span>개
                </div>
                <div className="feed__commentList inPad">
                <div className="comments">
                    <div className="comments__row">
                        <div className="comment">
                        <span className="comment__userId">songhee</span>
                        <span className="comment__contents">안녕하세요 위코드 18기 최송희님 위스타그램 진행중이시군요
                        </span>
                        </div>
                        <i id="test1" className="fas fa-ellipsis-h"></i>
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                </div>
                <div className="feed__update">1일 전</div>
                <div className="feed__myComment inPad">
                <i className="far fa-grin fa-lg"></i>
                <input type="text" placeholder="댓글 달기..." />
                <button className="comment__btn-post btn-none">게시</button>
                </div>
            </article>
            </div>
        );
    }
}

export default Feeds;