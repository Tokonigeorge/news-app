import React, { useState } from "react";
import avatar from "../../assets/avatar.svg";
import "../../styles/newsPage/comment.css";
import { useDataContextVal } from "../../context/dataContext";
import { updateComment, updateEditComment } from "../../context/actions";

const Comment = ({ name, _comment, date, id }) => {
  const [click, setClick] = useState(false);
  const [{ comment, editComment }, dispatch] = useDataContextVal();

  const handleDelete = (id) => {
    const _comment = [...comment];
    _comment.splice(id - 1, 1);
    dispatch(updateComment(_comment));
  };

  return (
    <div className="comment" onClick={() => setClick(!click)}>
      {click && (
        <div className="comment-manipulate">
          <span onClick={() => handleDelete(id)}>Delete</span>
        </div>
      )}
      <div className="comment-tile">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <span className="comment-header">
            <p>{name}</p>
            <p>{date}</p>
          </span>
          <div>
            <p className="comment">{_comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
