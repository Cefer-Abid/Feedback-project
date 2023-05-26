import { useNavigate } from "react-router-dom";

function ProductDetailHeader() {
  const navigate = useNavigate();

  return (
    <div className="header__btn-div">
      <div className="btn back--btn-div" onClick={() => navigate(-1)}>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9L2 5l4-4"
            stroke="#4661E6"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>

        <h3 className="go-back">Go back</h3>
      </div>

      <div className="edit--btn-div">
        <button className="btn edit-btn">Edit Feedback</button>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
