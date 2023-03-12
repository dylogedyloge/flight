import { FormattedMessage } from "react-intl";
import { MdYoutubeSearchedFor } from "react-icons/md";
import Link from "next/link";

const SearchCriteria = ({ dir }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-4"
      dir={dir}
    >
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
          <Link href="/Search">
            <button className="btn btn-success btn-block flex justify-between">
              <MdYoutubeSearchedFor className="text-xl" />{" "}
              <FormattedMessage id="page.SearchResults.changeSearch" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchCriteria;
