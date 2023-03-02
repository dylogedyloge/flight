import { FormattedMessage } from "react-intl";
import { MdYoutubeSearchedFor } from "react-icons/md";

const SearchCriteria = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-4">
      <div>
        <div className="text-md font-bold">
          {" "}
          <FormattedMessage id="page.SearchResults.origin" />
        </div>
        <div className="text-sm">
          {" "}
          <FormattedMessage id="page.SearchResults.originValue" />
        </div>
      </div>
      <div>
        <div className="text-md font-bold ">
          {" "}
          <FormattedMessage id="page.SearchResults.destination" />
        </div>
        <div className=" text-sm">
          {" "}
          <FormattedMessage id="page.SearchResults.destinationValue" />
        </div>
      </div>
      <div>
        <div className="text-md font-bold">
          {" "}
          <FormattedMessage id="page.SearchResults.class" />
        </div>
        <div className="text-sm ">
          {" "}
          <FormattedMessage id="page.SearchResults.classValue" />
        </div>
      </div>
      <div>
        <div className="text-md font-bold">
          {" "}
          <FormattedMessage id="page.SearchResults.numOfPassengers" />
        </div>
        <div className="text-sm ">
          <FormattedMessage id="page.SearchResults.numOfPassengersValue" />
        </div>
      </div>
      <div>
        <div className="text-md font-bold">
          <FormattedMessage id="page.home.date" />
        </div>
        <div className="text-sm ">
          <FormattedMessage id="page.home.dateValue" />
        </div>
      </div>
      <div>
        <div>
          <button className="btn btn-success btn-block flex justify-between">
            <MdYoutubeSearchedFor className="text-xl" />{" "}
            <FormattedMessage id="page.SearchResults.changeSearch" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCriteria;
