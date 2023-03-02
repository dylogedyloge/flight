const SortResults = () => {
  return (
    <div className="flex flex-wrap m-4">
      <select className="select  w-full max-w-xs rounded-md shadow-xl">
        <option>Price</option>
        <option>Time</option>
      </select>
    </div>
  );
};

export default SortResults;
