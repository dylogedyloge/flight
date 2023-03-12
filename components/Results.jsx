import SortResults from "./SortResults";
import MatchedResults from "./MatchedResults";

const Results = ({ dir }) => {
  return (
    <div dir={dir}>
      <SortResults dir={dir} />
      <br />
      <MatchedResults dir={dir} />
    </div>
  );
};

export default Results;
