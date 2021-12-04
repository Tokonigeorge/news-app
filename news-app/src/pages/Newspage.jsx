import React from "react";
import "../styles/newsPage/newspage.css";
import Imageslider from "../components/newsPage/Imageslider";
import { convertDate } from "../functions";
import Comment from "../components/newsPage/Comment";
import CommentForm from "../components/newsPage/CommentForm";
import { useDataContextVal } from "../context/dataContext";

const Newspage = ({ news }) => {
  const [{ comment, editComment }] = useDataContextVal();
  return (
    <div className="newspage">
      <div className="newspage-header">
        <p className="newspage-date">{convertDate(news?.publishedAt)}</p>
        <p className="news-author">{news?.author || "Anon"}</p>
      </div>
      <p className="news-title">{news?.title}</p>
      {news?.urlToImage && (
        <div className="news-image">
          <img src={news?.urlToImage} alt="" />
        </div>
      )}
      <p className="news-content">
        {news?.content?.split("[")?.[0] ||
          "Couldn't load content, please refresh"}
      </p>
      {comment.length > 0 && <p className="news-title">Comments</p>}
      {comment.length === 0 && (
        <p className="news-title">Be the first to comment.</p>
      )}
      {comment.length > 0 &&
        comment?.map((i, indx) => {
          return (
            <Comment
              key={`${i.id} ${i.comment}`}
              id={`${i.id} ${i.comment}`}
              name={i.name}
              _comment={i.comment}
              date={i.date}
            />
          );
        })}

      <CommentForm />
      {/* <Imageslider /> */}
    </div>
  );
};

export default Newspage;
