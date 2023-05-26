import { Link } from "react-router-dom";
import logo from "../assets/background-header.png";
import SideBarCatagory from "./sideBarCatagory";
import SideBarCatagoryStatus from "./sideBarCatagoryStatus";

function SideBar() {
  return (
    <div className="feedback__side-bar">
      <div className="side-bar__logo">
        <img src={logo} className="logo-img" alt="logo" />
        <div className="logo-text">
          <h1>Frontend Mentor</h1>
          <span>Feedback Board</span>
        </div>
      </div>

      <SideBarCatagory />

      <div className="side side-bar__status-catagory">
        <div className="status-title">
          <span>Roadmap</span>
          <Link to={"/roadmap-page"} className="link-view">
            View
          </Link>
        </div>

        <SideBarCatagoryStatus  />
      </div>
    </div>
  );
}

export default SideBar;
