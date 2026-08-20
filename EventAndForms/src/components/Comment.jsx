import React from "react";

function Comment({ key,comment }) {
  console.log(comment);
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-user">
          <div className="comment-avatar">
            {comment.username.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3>{comment.username}</h3>
          </div>
        </div>

        <div className="comment-rating">★ {comment.rating}/5</div>
      </div>

      <div className="comment-body">
        <p>{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
