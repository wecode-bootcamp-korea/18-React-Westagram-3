import React from 'react';
import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentList: [],
      click: false,
    };
  }

  addComment = (e) => {
    e.preventDefault();
    if(this.state.click) {
      this.setState({
        commentList: this.state.commentList.concat([this.state.comment]),
        click: "",
        comment: "",
      })
    }
  };
    
    

  pressEnter = (e) => {
    if(e.key === "Enter") {
      this.setState({
        commentList: this.state.commentList.concat([this.state.comment]),
        click: "",
        comment: "",
      })
    }
  };

  getInputValue = (e) => {
    this.setState({
      comment : e.target.value,
      click: true,
    });
  };

  render() {
    return (
        <section className="feeds">
          <article className="feed">
            <div className="feed-header">
              <div className="card">
                <img
                  src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                  alt="profile"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="user-name">wecode-bootcamp</h3>
                  <span className="user-loca">WeCode-위코드</span>
                </div>
              </div>
              <button type="menu" className="feed-btn">…</button>
            </div>
            <div className="feed-img">
              <img
                src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                alt="user"
                className="user-img"
              />
            </div>
            <div className="feed-footer">
              <div className="feed-reaction">
                <div className="feed-btns">
                  <div className="feed-btn">
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="feed-btn">
                    <i className="far fa-comment"></i>
                  </div>
                  <div className="feed-btn">
                    <i className="far fa-paper-plane"></i>
                  </div>
                </div>
                <div className="feed-btn">
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
            </div>
            <div className="feed-article">
              <div className="feed-content">
                <h3 className="user-name">wecode-bootcamp</h3>
                &nbsp;
                <p className="feed-desc">
                  "위코드는 단순 교육 업체가 아닌 개발자 커뮤니티 입니다.
                  Wecode에서 배우고 저는 총 5개 회사에서 오퍼를 받았습니다." -
                  Wecode 졸업생 위코더님
                </p>
              </div>
              <div className="feed-comments">
                <ul className="comments-list">
                  <li>
                    <h3 className="user-name">hellowecode</h3>
                    &nbsp;
                    <span className="user-comment">댓글1치키차카초코초코초</span>
                    <i
                      aria-label="좋아요"
                      className="far fa-heart comment-like comment-btn"
                    ></i>
                  </li>
                  <li>
                    <h3 className="user-name">byevscode</h3>
                    &nbsp;
                    <span className="user-comment">댓글2치키차카초코초코초</span>
                    <i
                      aria-label="좋아요"
                      className="far fa-heart comment-like comment-btn"
                    ></i>
                  </li>
                  <li>
                    <h3 className="user-name">goodtoseeyou</h3>
                    &nbsp;
                    <span className="user-comment">댓글3치키차카초코초코초</span>
                    <i
                      aria-label="좋아요"
                      className="far fa-heart comment-like comment-btn"
                    ></i>
                  </li>
                  <li>
                    <h3 className="user-name">goodtoseeyou</h3>
                    &nbsp;
                    <span className="user-comment">
                    {this.addComment ? this.state.commentList : ""} 
                    </span>
                    <i
                      aria-label="좋아요"
                      className="far fa-heart comment-like comment-btn"
                    ></i>
                  </li>
                </ul>
              </div>
            </div>

            <form className="input-comment">
              <i className="far fa-smile"></i>
              <textarea
                aria-label="댓글달기..."
                placeholder="댓글 달기..."
                id="comment"
                className="comment"
                autoComplete="off"                 onChange={this.getInputValue}
                onKeyPress={this.pressEnter}
                value={this.state.comment}
              ></textarea>
              <button type="submit"
              className={this.state.click ? "comment-submit blue" : "comment-submit gray disabled"}
              onClick={this.addComment}>게시</button>
            </form>
          </article>
        </section>
    );
  }
}

export default Feed;