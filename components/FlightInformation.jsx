import { useEffect } from "react";
import DetailedPriceCard from "./DetailedPriceCard";
import { FormattedMessage } from "react-intl";

const FlightInformation = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">FlightInformation</h2>
        <div>
          <ul
            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tab3"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-home3"
                className="w-full block px-6 py-3 my-2 hover:underline underline-offset-8 focus:underline active"
                id="tabs-home-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home3"
                role="tab"
                aria-controls="tabs-home3"
                aria-selected="true"
              >
                Flight Details
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-profile3"
                className="w-full block px-6 py-3 my-2 hover:underline underline-offset-8 focus:underline "
                id="tabs-profile-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profile3"
                role="tab"
                aria-controls="tabs-profile3"
                aria-selected="false"
              >
                Regulations
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-carriage3"
                className="w-full block px-6 py-3 my-2 hover:underline underline-offset-8 focus:underline"
                id="tabs-carriage-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-carriage3"
                role="tab"
                aria-controls="tabs-carriage3"
                aria-selected="false"
              >
                Carriage Rules
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tabs-tabContent3">
            <div
              className="tab-pane fade show active"
              id="tabs-home3"
              role="tabpanel"
              aria-labelledby="tabs-home-tab3"
            >
              <div className="flex flex-col w-full">
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
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tabs-profile3"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab3"
            >
              <div className="flex flex-col w-full">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  Regulations
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  Regulations
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tabs-carriage3"
              role="tabpanel"
              aria-labelledby="tabs-carriage-tab3"
            >
              <div className="flex flex-col w-full">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  Carriage Rules
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  Carriage Rules
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <DetailedPriceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInformation;
