import { useContext, useEffect, useState } from "react";
import icon from "../assets/done-icon-2.png";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import { AppContext } from "../context/appContext";

function HeaderSort() {
  const [sort, setSort] = useState("Most Upvotes");
  const [popup, setPopup] = useState(false);

  const { filterBySort } = useContext(AppContext);

  const selectArr = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setPopup(false)}>
        <label htmlFor="sv" className="sort--text">
          Sort by :
        </label>{" "}
        <span
          className="sort--selected"
          id="sv"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          {sort}
        </span>{" "}
        <span className="sort--icon">
          {popup ? (
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 6l4-4 4 4"
                stroke="white"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4 4-4"
                stroke="white"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          )}
        </span>{" "}
        {popup ? (
          <div className="select-list " onClick={() => setPopup(false)}>
            {selectArr.map((value) => {
              return (
                <div
                  className={`${value} select-value`}
                  key={value}
                  onClick={() => {
                    setSort(value);
                    filterBySort(value);
                  }}
                >
                  <label htmlFor={value}>{value}</label>

                  <div className="checkbox--icon-div" id={value}>
                    <img
                      src={icon}
                      className={value === sort ? "on" : "off"}
                      alt="icon"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </OutsideClickHandler>
    </>
  );
}

export default HeaderSort;
