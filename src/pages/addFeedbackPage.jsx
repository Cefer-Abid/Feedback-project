import { useNavigate } from "react-router-dom";
import logo from "../assets/background-header.png";
import { AddFeedbackButton } from "../components/styles/button.styled";

function AddFeedbackPage() {
  const navigate = useNavigate();
  return (
    <div className="container--add-feedback">
      <div className="header--btn-div" onClick={() => navigate(-1)}>
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
      <div className="content--add-feedback">
        <div className="logo-div">
          <img alt="logo" src={logo} className="add-feedback--logo"></img>
        </div>
        <h1 className="title-content">Create New Feedback</h1>
        <div className="new-feedback--section">
          <form className="include-info">
            <div className="text-div">
              <label className="info-title">Feedback Title</label>
              <span>Add a short, descriptive headline</span>
            </div>
            <input className="new-feedback--input" />
          </form>

          <form className="include-info">
            <div className="text-div">
              <label className="info-title">Category</label>
              <span>Choose a category for your feedback</span>
            </div>

            <input className="new-feedback--input" />
          </form>

          <form className="include-info">
            <div className="text-div">
              <label className="info-title">Feedback Detail</label>
              <span>
                Include any specific comments on what should be improved, added,
                etc.
              </span>
            </div>
            <input className="new-feedback--input input-detail" />
          </form>
        </div>
        <div className="add-feedback__btn-div">
          <button className="btn--cancel">Cancel</button>
          {/* <button className="btn--new-feedback">+ Add Feedback</button> */}
          <AddFeedbackButton>+ Add Feedback</AddFeedbackButton>
        </div>
      </div>
    </div>
  );
}

export default AddFeedbackPage;
