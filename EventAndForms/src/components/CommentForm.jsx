import React, { useState } from "react";

function CommentForm({addComment}) {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 0,
  });

  function handleInput(e) {
    if (e.target.name === "rating") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: Number(e.target.value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(formData);
    setFormData({
      username: "",
      comment: "",
      rating: 0,
    });
  };

  return (
    <>
      <div className="comment-form-container">
        <h4>Forms and Events</h4>
        <form className="comment-form" action="" onSubmit={handleSubmit}>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={handleInput}
            name="username"
          />
          <br />
          <br />

          <label htmlFor="">Comment:</label>
          <textarea
            type="text"
            value={formData.comment}
            onChange={handleInput}
            name="comment"
          />
          <br />
          <br />

          <label htmlFor="">Rating</label>
          <input
            type="number"
            value={formData.rating}
            onChange={handleInput}
            name="rating"
            min={1}
            max={5}
          />
          <br />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
