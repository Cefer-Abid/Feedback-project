import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CategoryButton } from "./styles/button.styled";

function Category({ productRequest, upvotesRequests }) {
  let commentCount = productRequest?.comments?.length ?? 0;

  productRequest?.comments?.map(
    (comment) => (commentCount += comment.replies?.length ?? 0)
  );

  // Created property for comments count
  productRequest.commentCount = commentCount;

  const theme = {
    fontSize: {
      body: "16px",
      header: "22px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="category">
        <div className="category-info">
          <div
            className={`category-info__left ${
              productRequest.isClick && "btn-active"
            }`}
            onClick={() => upvotesRequests(productRequest.id)}
          >
            <svg
              width="10"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              className="category__arrow-up"
            >
              <path
                d="M1 6l4-4 4 4"
                stroke={productRequest.isClick ? "#fff" : "#4661E6"}
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>

            <div
              className={`category-info__left--num ${
                productRequest.isClick && "btn-active"
              }`}
            >
              {productRequest.upvotes}
            </div>
          </div>
          <div className="category-info__div">
            <div className="category-info__text">
              <Link to={`/product/${productRequest.id}`} className="info-main">
                {productRequest.title}
              </Link>
              <span className="info-span">{productRequest.description}</span>
            </div>
            {/* <div className="category-info__btn-div">
              <button className="btn">{productRequest.category}</button>
            </div> */}
            <div>
              <CategoryButton>{productRequest.category}</CategoryButton>
            </div>
          </div>
        </div>
        <div className="category-comment">
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
              fill="#CDD2EE"
              fillRule="nonzero"
            />
          </svg>

          <div className={commentCount === 0 ? "zero" : "comment__num"}>
            {commentCount}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Category;
