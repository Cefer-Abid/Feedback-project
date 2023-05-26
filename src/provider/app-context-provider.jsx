import { useState } from "react";
import { AppContext } from "../context/appContext";
import { data } from "../data";

function AppContextProvider({ children }) {
  const [activeCatagory, setActiveCatagory] = useState("All");
  const [productRequests, setProductRequests] = useState(data.productRequests);

  function upvotesRequests(id) {
    const product = productRequests.map((pr) => {
      if (pr.id === id) {
        return {
          ...pr,
          upvotes: pr.isClick ? pr.upvotes - 1 : pr.upvotes + 1,
          isClick: pr.isClick ? false : true,
        };
      }
      return pr;
    });
    setProductRequests(product);
  }

  // -------------------------------------------
  // -------------------------------------------

  function filterCatagory(sort) {
    const catagory = data.productRequests.filter((pr) =>
      sort.toLowerCase() === "all" ? pr : pr.category === sort.toLowerCase()
    );
    setProductRequests(catagory);
  }

  // -------------------------------------------
  // -------------------------------------------

  const getStatusCount = function (status) {
    return productRequests.filter(
      (productRequest) => productRequest.status === `${status.toLowerCase()}`
    ).length;
  };

  // -------------------------------------------
  // -------------------------------------------

  const filterBySort = function (sort) {
    // Upvotes:
    if (sort === "Least Upvotes") {
      const sortedProducts = productRequests
        .slice()
        .sort((a, b) => Number(a.upvotes) - Number(b.upvotes));
      return setProductRequests(sortedProducts);
    }
    if (sort === "Most Upvotes") {
      const sortedProducts = productRequests
        .slice()
        .sort((a, b) => Number(b.upvotes) - Number(a.upvotes));
      return setProductRequests(sortedProducts);
    }

    // Comments:
    if (sort === "Least Comments") {
      const sortedProducts = productRequests
        .slice()
        .sort((a, b) => Number(a.commentCount) - Number(b.commentCount));
      return setProductRequests(sortedProducts);
    }
    if (sort === "Most Comments") {
      const sortedProducts = productRequests
        .slice()
        .sort((a, b) => Number(b.commentCount) - Number(a.commentCount));
      return setProductRequests(sortedProducts);
    }
  };

  // -------------------------------------------
  // -------------------------------------------

  return (
    <AppContext.Provider
      value={{
        productRequests,
        activeCatagory,
        setActiveCatagory,
        filterBySort,
        upvotesRequests,
        filterCatagory,
        getStatusCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
