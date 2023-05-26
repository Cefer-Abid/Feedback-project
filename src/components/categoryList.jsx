import { useContext } from "react";
import { AppContext } from "../context/appContext";
import Category from "./category";
import EmptyView from "./emptyView";

function CategoryList() {
  const { productRequests, upvotesRequests } = useContext(AppContext);

  if (!productRequests.length) {
    return (
      <div className="container--emptyPage">
        <EmptyView />
      </div>
    );
  }

  return (
    <div className="category-list">
      {productRequests.map(function (productRequest) {
        return (
          <Category
            key={productRequest.id}
            productRequest={productRequest}
            upvotesRequests={upvotesRequests}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;
