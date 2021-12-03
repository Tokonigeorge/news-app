import React from "react";
import avatar from "../../assets/avatar.svg";
import "../../styles/newsPage/comment.css";

const Comment = ({}) => {
  return (
    <div className="comment">
      <p className="news-title">Comments</p>
      <div className="comment-tile">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <span className="comment-header">
            <p>Name</p>
            <p>29th Dec 2021</p>
          </span>
          <div>
            <p className="comment">
              Commentssss this is what im tryig to type and write the whole
              situation is nuts and craxzy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
