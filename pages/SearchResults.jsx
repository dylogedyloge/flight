import SearchCriteria from "../components/SearchCriteria";
import Results from "../components/Results";
import FilterResults from "../components/FilterResults";

const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 w-4/5 mx-auto  ">
      <header className="card shadow-xl ">
        <SearchCriteria />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-4 ">
        <main className="col-span-3 ">
          <Results />
        </main>
        <aside className=" col-span-1 card shadow-xl">
          <FilterResults />
        </aside>
      </div>
    </div>
  );
};

export default SearchResults;
