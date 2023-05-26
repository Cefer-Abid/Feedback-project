import { Link, useNavigate } from "react-router-dom";
import { AddFeedbackButton } from "./styles/button.styled";

function RoudmapContainerHeader() {
  const navigate = useNavigate();

  return (
    <div className="roudmap--container__header">
      <div className="roudmap--header__btn-div">
        <div className="header--logo__btn">
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
          <div className="roadmap__logo-div">
            <span className="roadmap--logo">Roadmap</span>
          </div>
        </div>

        <div>
          {/* <Link to="/new-feedback">
            <button className="roadmap__btn--feedback btn">
              + Add Feedback
            </button>
          </Link> */}

          <Link to="/new-feedback">
            <AddFeedbackButton>+ Add Feedback</AddFeedbackButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoudmapContainerHeader;
