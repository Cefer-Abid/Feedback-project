import SideBar from "../components/sideBar";
import FeedbackHeader from "../components/feedbackHeader";
import CategoryList from "../components/categoryList";
import React from "react";
import AppContextProvider from "../provider/app-context-provider";

function Home() {
  return (
    <AppContextProvider>
      <div className="container">
        <SideBar />

        {/* Content */}
        <div className="feedback__hero">
          <FeedbackHeader />

          <CategoryList />
        </div>
      </div>
    </AppContextProvider>
  );
}
export default Home;
