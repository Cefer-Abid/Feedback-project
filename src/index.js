import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import "./css/addFeedback.css";
import "./css/detailFeedback.css";
import "./css/emptyView.css";
import Home from "./pages/home";
import AddFeedbackPage from "./pages/addFeedbackPage";
import ProductDetailPage from "./pages/productDetailPage";
import RoadmapPage from "./pages/roadmapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-feedback",
    element: <AddFeedbackPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetailPage />,
  },
  {
    path: "/roadmap-page",
    element: <RoadmapPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
