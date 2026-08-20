import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function Comments() {
  const [comments, setComments] = useState([]);

  function addComment(comment) {
    setComments((prev) => [...prev, comment]);
  }
  return (
    <>
      <CommentForm addComment={addComment} />
      <br />
      <div className="comments-section">
        <h2>All Comments</h2>

        {comments.map((obj, index) => (
          <Comment key={index} comment={obj} />
        ))}
      </div>
    </>
  );
}

export default Comments;
