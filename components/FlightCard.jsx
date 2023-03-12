import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

const FlightCard = ({ dir }) => {
  return (
    <div className="flex-1 card  shadow-xl m-4 " dir={dir}>
      <div className="card-body">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="kbd kbd-md bg-accent-focus font-bold text-sm text-accent-content">
            <FormattedMessage id="page.SearchResults.classValue" />
          </div>
          <div className="kbd kbd-md  bg-info font-bold text-sm text-info-content">
            <FormattedMessage id="page.SearchResults.availableSeats" />
            &nbsp;
            <FormattedMessage id="page.SearchResults.availableSeatsValue" />
          </div>

          <div className="kbd kbd-md bg-error font-bold text-sm  text-error-content">
            <FormattedMessage id="page.SearchResults.flightNumber" />
            &nbsp;
            <FormattedMessage id="page.SearchResults.flightNumberValue" />
          </div>
          <div className="kbd kbd-md font-bold text-sm  text-warning-content bg-warning">
            <FormattedMessage id="page.SearchResults.charterOrSystem" />
          </div>
        </div>
        <div className="grid grid-cols-4 w-full">
          <div>
            <Image src="/asemanairline.png" width="200" height="20" />
          </div>
          <div className="col-span-3">
            <div className="flex items-center justify-between" dir="ltr">
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
              <GiAirplaneDeparture className="text-4xl text-blue-600" />
              <hr className="border-dotted w-full bg-neutral" />

              <GiAirplaneArrival className="text-4xl text-red-600" />
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

        <div className="card-actions flex items-center  justify-between">
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-300 text-bg-base-content">
            <div className="stat flex">
              <div className=" text-sm">USD</div>
              <div className="stat-value text-lg">
                <FormattedMessage id="page.SearchResults.priceValueUSD" />
              </div>
            </div>

            <div className="stat flex">
              <div className=" text-sm">IRR</div>
              <div className="stat-value text-lg">
                {" "}
                <FormattedMessage id="page.SearchResults.priceValueIRR" />
              </div>
            </div>

            <div className="stat flex">
              <div className=" text-xs">IQD</div>

              <div className="stat-value text-lg">
                {" "}
                <FormattedMessage id="page.SearchResults.priceValueIQD" />
              </div>
            </div>
          </div>
          <Link href="/ChoosedFlight">
            <button className="btn btn-success btn-wide">
              <FormattedMessage id="page.SearchResults.choose" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
