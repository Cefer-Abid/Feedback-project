import { useState } from "react";

function ProductDetailNewComment() {
  const [input, setInput] = useState("");

  const characters = 225 - input.length;

  return (
    <div className="section new--comment__section">
      <div>
        <span className="new--comment__title">Add Comment</span>
      </div>

      {/* <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="input--new-comment"
        />
      </form> */}

      <textarea
        name=""
        cols="50"
        rows="4"
        className="textarea--new-comment"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="new--comment__footer">
        <div>
          <span className="footer--info">{characters} characters left</span>
        </div>
        <div>
          <button className="btn post--comment-btn">Post Comment</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailNewComment;
