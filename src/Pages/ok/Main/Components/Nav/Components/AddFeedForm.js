import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { UrlPath } from "../../../../UrlPath";
import "./AddFeedForm.scss";

class AddFeedForm extends Component {
  state = {
    content: "",
    imageURL: "",
    imageURLs: [],
  };

  contentChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  fileChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addImgURL = () => {
    this.setState({
      imageURLs: [...this.state.imageURLs, this.state.imageURL],
      imageURL: "",
    });
  };

  submitContent = async () => {
    const { content, imageURLs } = this.state;
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/posting/upload`, {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
      body: JSON.stringify({
        content: content,
        image_url: imageURLs,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
    this.setState({
      content: "",
      imageURLs: [],
    });
  };
  render() {
    const { getFeedData, uploadPop, handleUpload } = this.props;
    const { content, imageURL, imageURLs } = this.state;
    return (
      <div className="add-feed-form">
        <div className={`feed-form-wrap ${uploadPop ? "active" : ""}`}>
          <h1 className="form-title">
            게시물 등록
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={() => {
                handleUpload();
              }}
            />
          </h1>
          <ul className="form-list-wrap">
            <li className="form-list">
              <span className="image-title">
                <FontAwesomeIcon icon={faCheckCircle} />
                이미지
              </span>
              <input
                className="image-upload"
                name="imageURL"
                type="text"
                placeholder="이미지 URL"
                value={imageURL}
                onChange={this.fileChange}
              />
              <button className="image-add-btn" onClick={this.addImgURL}>
                추가
              </button>
            </li>
            <ul className="image-list-wrap">
              {imageURLs &&
                imageURLs.map((url, index) => {
                  return (
                    <li key={index} className="image-list">
                      {url}
                    </li>
                  );
                })}
            </ul>
            <li className="form-list">
              <span className="content-title">
                <FontAwesomeIcon icon={faCheckCircle} />
                내용
              </span>
              <textarea
                name="content"
                value={content}
                onChange={this.contentChange}
              />
            </li>
            <button
              onClick={() => {
                this.submitContent();
                getFeedData();
              }}
            >
              등록하기
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddFeedForm;
