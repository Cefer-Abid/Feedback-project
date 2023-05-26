function productDetailReplyArea({ activeReply }) {
  return (
    <div className={activeReply}>
      {/* <form className="form--reply">
          <input type="text" className="input--reply" />
        </form> */}
      <textarea
        name=""
        id=""
        cols="40"
        rows="4"
        className="textarea--reply"
      ></textarea>
      <div>
        <button className="post-reply--btn btn">Post Reply</button>
      </div>
    </div>
  );
}
export default productDetailReplyArea;
