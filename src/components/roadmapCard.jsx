import { CategoryButton } from "./styles/button.styled";

function RoadmapCard({ request, getNewUpvotes, title }) {
  let commentCount = request.comments?.length ?? 0;

  request?.comments?.map(
    (comment) => (commentCount += comment.replies?.length ?? 0)
  );

  return (
    <div
      className={`card card-for-${title.toLowerCase()}`}
      key={request.upvotes}
    >
      <div className="card--text-field">
        <div className="status--name">{request.status}</div>
        <div className="card--text-div">
          <h3 className="card--text-title">{request.title}</h3>
          <p className="card--text">{request.description}</p>
        </div>
      </div>

      {/* <div className="card--btn-div">
        <button className="btn">{request.category}</button>
      </div> */}
      <div>
        <CategoryButton>{request.category}</CategoryButton>
      </div>
      <div className="card--footer">
        <div
          className={`upvotes-info ${request.isClick && "btn-active"}`}
          onClick={() => getNewUpvotes(request.id)}
        >
          <span className="card--footer-arrow">
            {" "}
            <svg
              width="10"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              // className="card--footer-arrow"
            >
              <path
                d="M1 6l4-4 4 4"
                stroke={request.isClick ? "#fff" : "#4661E6"}
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className={`upvotes-num ${request.isClick && "btn-active"}`}>
            {request.upvotes}
          </span>
        </div>

        <div className="category-comment">
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
              fill="#CDD2EE"
              fillRule="nonzero"
            />
          </svg>

          <div className={commentCount ? "comment__num" : "zero"}>
            {commentCount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
