import React from "react";

export const AppContext = React.createContext({
  productRequests: [],
  filterBySort: [],
  upvotesRequests: [],
  filterCatagory: [],
  getStatusCount: [],
  activeCatagory: "",
  setActiveCatagory: "",
});
