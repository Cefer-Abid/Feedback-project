import ProductComment from "./productComment";

function ProductDetailComments({ comments }) {
  let commentsCount = comments?.length ?? 0;

  comments?.map((comment) => (commentsCount += comment.replies?.length ?? 0));

  return (
    <div className="section comments--container">
      <div>
        <span className="comments-count">
          {commentsCount} {commentsCount > 1 ? "Comments" : "Comment"}
        </span>
      </div>
      <div className="comments-div">
        {comments?.map((comment) => (
          <ProductComment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetailComments;
