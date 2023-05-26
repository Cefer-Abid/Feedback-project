import { useContext } from "react";
import { AppContext } from "../context/appContext";

function SideBarCatagory() {
  const catagories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const {
    activeCatagory,
    setActiveCatagory,
    filterCatagory,
  } = useContext(AppContext);

  return (
    <div className="side side-bar__select-catagory">
      {catagories.map((ctg) => {
        return (
          <button
            key={ctg}
            className={`btn-category   ${
              activeCatagory === `${ctg}` ? "btn-active" : ""
            }`}
            onClick={() => {
              setActiveCatagory(`${ctg}`);
              filterCatagory(ctg);
            }}
          >
            {ctg}
          </button>
        );
      })}
    </div>
  );
}

export default SideBarCatagory;
