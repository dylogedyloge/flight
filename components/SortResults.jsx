const SortResults = ({ dir }) => {
  return (
    <div className="flex flex-wrap m-4" dir={dir}>
      <select className="select select-accent w-full max-w-xs rounded-md shadow-xl">
        <option>Price</option>
        <option>Time</option>
      </select>
    </div>
  );
};

export default SortResults;
