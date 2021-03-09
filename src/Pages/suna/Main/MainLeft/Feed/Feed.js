import React from 'react';
import Comment from './Comment/Comment';
import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: "",
      click: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,     
        });
      });
  }

  getInputValue = (e) => {
    this.setState({
      commentValue : e.target.value,
      click: true,
    });
  };
  
  addComment = (e) => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
      this.setState({
        commentList: [
          ...commentList,
          {
            id: commentList.length + 1,
            userName: 'wecode',
            content: commentValue,
            isLiked: false
          }
        ],
        commentValue: "",
        click: "",
      });
  };

  pressEnter = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      const { commentList, commentValue } = this.state;
        this.setState({
          commentList: [
            ...commentList,
            {
              id: commentList.length + 1,
              userName: 'wecode',
              content: commentValue,
              isLiked: false
            }
          ],
          commentValue: "",
          click: "",
        });
    }
  };

  render() {
    const { commentList, commentValue } = this.state;

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
                    {commentList.map(comment => {
                      return (
                        <Comment 
                        key={comment.id}
                        clickEvent={this.changeColor}
                        name={comment.userName}
                        commentValue={comment.content} />
                      );
                    })}
                </ul>
              </div>
            </div>

            <form className="input-comment" onSubmit={this.addComment}>
              <i className="far fa-smile"></i>
              <textarea
                aria-label="댓글달기..."
                placeholder="댓글 달기..."
                id="comment"
                className="comment"
                autoComplete="off"
                onChange={this.getInputValue}
                onKeyPress={this.pressEnter}
                value={commentValue}
              ></textarea>
              <button type="submit"
              className="comment-submit blue"
              onClick={this.addComment}>게시</button>
            </form>
          </article>
        </section>
    );
  }
}

export default Feed;