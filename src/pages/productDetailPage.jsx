import Category from "../components/category";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { data } from "../data";
import ProductDetailHeader from "../components/productDetailHeader";
import ProductDetailComments from "../components/productDetailComments";
import ProductDetailNewComment from "../components/productDetailNewComment";

function ProductDetailPage() {
  const { productId } = useParams();
  const [productRequests, setProductRequests] = useState(data.productRequests);

  const productRequest = productRequests.find((pr) => pr.id === +productId);
  const { comments } = productRequest;

  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // ------------------------------------------------------------

  return (
    <div className="container--detail">
      <ProductDetailHeader />

      <div className="detail__catagory">
        <Category
          key={productRequest.id}
          productRequest={productRequest}
          upvotesRequests={upvotesRequests}
        />
      </div>

      <ProductDetailComments comments={comments} />

      <ProductDetailNewComment />
    </div>
  );
}

export default ProductDetailPage;
