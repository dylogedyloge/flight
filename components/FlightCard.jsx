import { FormattedMessage } from "react-intl";

const FlightCard = ({ btnTitle }) => {
  return (
    <div className="flex-1 card  shadow-xl m-4 ">
      <div className="card-body">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="kbd kbd-md font-bold text-sm text-base-600">
            <FormattedMessage id="page.SearchResults.classValue" />
          </div>
          <div className="kbd kbd-md font-bold text-sm text-base-600">
            <FormattedMessage id="page.SearchResults.availableSeats" />
            <FormattedMessage id="page.SearchResults.availableSeatsValue" />
          </div>
          <div className="kbd kbd-md font-bold text-sm  text-base-600">
            <FormattedMessage id="page.SearchResults.price" />
            <FormattedMessage id="page.SearchResults.currency" />
          </div>
          <div className="kbd kbd-md font-bold text-sm  text-base-600">
            <FormattedMessage id="page.SearchResults.flightNumberValue" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex-auto text-xs text-gray-500 my-1">
              <span className="mr-1 ">
                <FormattedMessage id="page.SearchResults.departureDateValue" />
              </span>
              <br />
            </div>
            <div className="w-full flex-none text-lg  font-bold leading-none">
              <p>THR</p>
            </div>
            <span className="text-sm text-gray-500">
              <FormattedMessage id="page.SearchResults.departureTime" />
            </span>
            <div className="text-xs">
              <FormattedMessage id="page.SearchResults.originValue" />
            </div>
          </div>
          <hr className="border-dotted w-48 bg-neutral" />
          <div className="flex flex-col mx-auto">
            <img
              src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
              className="w-20 p-1"
            />
          </div>
          <hr className="border-dotted w-48 mr-10 bg-neutral" />
          <div className="flex flex-col ">
            <div className="flex-auto text-xs text-gray-500 my-1">
              <span className="mr-1">
                <FormattedMessage id="page.SearchResults.arrivalDateValue" />
              </span>
              <br />
            </div>
            <div className="w-full flex-none text-lg  font-bold leading-none">
              <p>MHD</p>
            </div>
            <span className="text-sm text-gray-500">
              <FormattedMessage id="page.SearchResults.arrivalTimeValue" />
            </span>
            <div className="text-xs">
              <FormattedMessage id="page.SearchResults.destinationValue" />
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-success btn-block">
            <FormattedMessage id="page.SearchResults.choose" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
