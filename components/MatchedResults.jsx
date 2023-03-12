import FlightCard from "./FlightCard";

const MatchedResults = ({ dir }) => {
  return (
    <div className="grid grid-cols-1" dir={dir}>
      <FlightCard dir={dir} />
      <FlightCard dir={dir} />
      <FlightCard dir={dir} />
    </div>
  );
};

export default MatchedResults;
