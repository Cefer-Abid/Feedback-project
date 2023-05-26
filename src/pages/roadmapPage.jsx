import RoudmapColumn from "../components/roudmapColumn";
import RoudmapContainerHeader from "../components/roudmapContainerHeader";
import { StyleRoudmapContainer } from "../components/styles/roudmap.styled";
import { useState } from "react";
import { data } from "../data";

function RoadmapPage() {
  const [productRequests, setProductRequests] = useState(data.productRequests);
  // -------------------------------------------

  const statusesColumns = [
    {
      status: "planned",
      title: "Planned",
      description: " Ideas prioritized for research",
    },
    {
      status: "in-progress",
      title: "In-progress",
      description: " Ideas prioritized for research",
    },
    {
      status: "live",
      title: "Live",
      description: " Ideas prioritized for research",
    },
  ];

  // -------------------------------------------
  // -------------------------------------------

  const statusesArr = productRequests.reduce(
    (acc, curValue) => {
      if (statusesColumns.map((s) => s.status).includes(curValue.status)) {
        acc[curValue.status].push(curValue);
        return acc;
      }
      return acc;
    },
    {
      "in-progress": [],
      planned: [],
      live: [],
    }
  );

  // -------------------------------------------
  // -------------------------------------------

  const getNewUpvotes = function (id) {
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
  };

  return (
    <StyleRoudmapContainer>
      <RoudmapContainerHeader />

      <div className="roudmap--container__content">
        {statusesColumns.map((column) => (
          <RoudmapColumn
            productRequests={statusesArr[column.status]}
            key={column.status}
            title={column.title}
            description={column.description}
            getNewUpvotes={getNewUpvotes}
          />
        ))}
      </div>
    </StyleRoudmapContainer>
  );
}

export default RoadmapPage;
