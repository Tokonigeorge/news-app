import React, { useState } from "react";
import "../../styles/newsPage/commentform.css";
import { useDataContextVal } from "../../context/dataContext";
import { updateComment } from "../../context/actions";
import { convertDate } from "../../functions";

const CommentForm = ({}) => {
  const [{ comment }, dispatch] = useDataContextVal();
  const [nameValue, setNameValue] = useState("");
  const [commentVal, setCommentVal] = useState("");
  const [empty, setEmpty] = useState(false);
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (nameValue.length === 0 || commentVal.length === 0) {
      return setEmpty(true);
    } else {
      setEmpty(false);
      const _comment = comment?.slice();
      const commentObject = {
        id: _comment?.length + 1,
        name: nameValue,
        comment: commentVal,
        date: convertDate(new Date()),
      };

      // id
      //   ? _comment.splice(id - 1, 0, commentObject)
      _comment.push(commentObject);
      dispatch(updateComment(_comment));
    }
  };
  return (
    <div className="comment-form">
      <p className="news-title">Add a comment :)</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={nameValue}
          placeholder="Name"
          name="name"
          type="text"
          onChange={(e) => setNameValue(e.target.value)}
          style={{
            border:
              nameValue.length === 0 && submit
                ? "1px solid red"
                : submit
                ? "1px solid blue"
                : " 1px solid #2d3848",
          }}
        />
        <textarea
          placeholder={"Add a comment"}
          value={commentVal}
          onChange={(e) => setCommentVal(e.target.value)}
          style={{
            border:
              commentVal.length === 0 && submit
                ? "1px solid red"
                : submit
                ? "1px solid blue"
                : " 1px solid #2d3848",
          }}
        />
        {empty && <p className="empty-message">Please fill in both fields:/</p>}
        <div className="button-wrapper">
          <button
            type="submit"
            style={{
              backgroundColor:
                nameValue.length > 0 && commentVal.length > 0
                  ? "#ff87ac"
                  : undefined,
            }}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
