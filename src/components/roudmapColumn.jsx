import RoadmapCard from "./roadmapCard";

function RoudmapColumn({ title, description, productRequests, getNewUpvotes }) {
  return (
    <div className="content--status-div">
      <div className="roadmap__content--title-div">
        <h3 className="title--status-name">
          {title} ({productRequests.length})
        </h3>
        <span className="title--status-span">{description}</span>
      </div>

      <div className="roadmap__content--cards-div">
        {productRequests.map((request) => (
          <RoadmapCard
            request={request}
            getNewUpvotes={getNewUpvotes}
            title={title}
            key={request.id}
          />
        ))}
      </div>
    </div>
  );
}

export default RoudmapColumn;
