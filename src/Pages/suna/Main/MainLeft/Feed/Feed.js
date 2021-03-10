import React from 'react';
import Comment from './Comment/Comment';
import FeedList from './FeedList/FeedList';
import './Feed.scss';
import './FeedList/FeedList.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
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

    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,     
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
            userName: 'wecode-bootcamp',
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
              userName: 'wecode-bootcamp',
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
    const { commentList, commentValue, feedList } = this.state;
    return (
        <section className="feeds">
          
            {feedList.map(feed => {
              return (
                <article className="feed">
                  <FeedList
                  key={feed.id}
                  name={feed.userName}
                  profileImg={feed.profileSrc}
                  userLoca={feed.userLoca}
                  feedImg={feed.feedSrc} />
                  <div className="feed-article">
                    <div className="feed-content">
                      <h3 className="user-name">wecode-bootcamp</h3>
                      &nbsp;
                      <p className="feed-desc">
                        "위코드는 단순 교육 업체가 아닌 개발자 커뮤니티 입니다."
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
                      id={commentList.length + 1}
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
              );
            })}
            
          
        </section>
    );
  }
}

export default Feed;