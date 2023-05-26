import { useState } from "react";
import img from "../assets/user-images/image-elijah.jpg";
import ProductDetailReplyArea from "./productDetailReplyArea";

function ProductReplyComment({ comment, replyTo }) {
  const [activeReply, setActiveReply] = useState("hidden");

  const toggleReply = function () {
    activeReply === "hidden"
      ? setActiveReply("reply--field-div")
      : setActiveReply("hidden");
  };
  return (
    <div className="reply--comment" id={comment.id}>
      <div>
        <img src={img} alt="user-img" className="user--img" />
      </div>
      <div className="comment--user-div">
        <div className="user--comment-title">
          <div className="user--name-div">
            <span className="user-name">{comment.user.name}</span>
            <span className="user-nickname">@{comment.user.username}</span>
          </div>
          <div className="reply--btn-div">
            <button onClick={toggleReply} className="btn reply-btn">
              Reply
            </button>
          </div>
        </div>
        <div className="user--comment-text">
          <p className="user-comment">
            <span className="reply--to">@{replyTo} </span>
            <span> {comment.content}</span>
          </p>
        </div>
        <ProductDetailReplyArea activeReply={activeReply} />
      </div>
    </div>
  );
}

export default ProductReplyComment;
