import { useContext } from "react";
import { AppContext } from "../context/appContext";

function SideBarCatagoryStatus() {
  const { getStatusCount } = useContext(AppContext);

  return (
    <ul className="">
      <li className="status--li">
        <span className="status--li__text">Planned</span>
        <span className="status--li__number">
          {getStatusCount("planned")}
          </span>
      </li>
      <li className="status--li">
        <span className="status--li__text">In-Progress</span>
        <span className="status--li__number">
          {getStatusCount("In-Progress")}
        </span>
      </li>
      <li className="status--li">
        <span className="status--li__text">Live</span>
        <span className="status--li__number">
          {getStatusCount("live")}
          </span>
      </li>
    </ul>
  );
}

export default SideBarCatagoryStatus;
