// import SortResults from "./SortResults";
// import MatchedResults from "./MatchedResults";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import flightData from "../public/dummyData/flightData";

const Results = ({ dir }) => {
  const [sortBy, setSortBy] = useState("price_in_USD");

  const sortFlights = (a, b) => {
    if (sortBy === "price_in_USD") {
      return a.price_in_USD - b.price_in_USD;
    } else {
      return a.departure_date - b.departure_date;
    }
  };

  const sortedFlights = [...flightData].sort(sortFlights);

  return (
    <div dir={dir}>
      <div className="flex flex-wrap m-4">
        <select
          className="select select-bordered w-full max-w-xs  shadow-xl"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="price_in_USD">Price</option>
          <option value="departure_date">Date</option>
        </select>
      </div>
      <br />
      {/* matched results */}
      {sortedFlights.map((flight) => (
        <div
          className="flex-1 card  shadow-xl m-4 bordered border-primary"
          key={flight.id}
        >
          <div className="card-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="kbd kbd-md  text-sm ">
                {/* <FormattedMessage id="page.SearchResults.classValue" /> */}
                {flight.class_rate}
              </div>
              <div className="kbd kbd-md    text-sm ">
                <FormattedMessage id="page.SearchResults.availableSeats" />
                &nbsp;
                {/* <FormattedMessage id="page.SearchResults.availableSeatsValue" /> */}
                {flight.available_seats}
              </div>

              <div className="kbd kbd-md   text-sm  ">
                <FormattedMessage id="page.SearchResults.flightNumber" />
                &nbsp;
                {/* <FormattedMessage id="page.SearchResults.flightNumberValue" /> */}
                {flight.flight_number}
              </div>
              <div className="kbd kbd-md  text-sm  ">
                {/* <FormattedMessage id="page.SearchResults.charterOrSystem" /> */}
                {flight.is_systemic ? "System" : "Charter"}
              </div>
            </div>
            <div className="grid grid-cols-4 w-full p-8">
              <div>
                <Image
                  src="/asemanairline.png"
                  width="200"
                  height="20"
                  alt="airline"
                />
              </div>
              <div className="col-span-3">
                <div className="flex items-center justify-between" dir="ltr">
                  <div className="flex flex-col w-24">
                    <div className="flex-auto text-xs text-gray-500 my-1 ">
                      <span className="">
                        {/* <FormattedMessage id="page.SearchResults.departureDateValue" /> */}
                        {flight.departure_date}
                      </span>
                      <br />
                    </div>
                    <div className="w-full flex-none text-lg  font-bold leading-none">
                      <p>{flight.origin_airport}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {/* <FormattedMessage id="page.SearchResults.departureTime" /> */}
                      {flight.departure_time}
                    </span>
                    <div className="text-xs">
                      {/* <FormattedMessage id="page.SearchResults.originValue" /> */}
                      {flight.origin_city}
                    </div>
                  </div>
                  <GiAirplaneDeparture className="text-4xl text-blue-600" />
                  <hr className="border-dotted w-full bg-neutral" />

                  <GiAirplaneArrival className="text-4xl text-red-600" />
                  <div className="flex flex-col w-24 ">
                    <div className="flex-auto text-xs text-gray-500 my-1 ">
                      <span className="">
                        {/* <FormattedMessage id="page.SearchResults.arrivalDateValue" /> */}
                        {flight.arrival_date}
                      </span>
                      <br />
                    </div>
                    <div className="w-full flex-none text-lg  font-bold leading-none">
                      <p>{flight.destination_airport}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {/* <FormattedMessage id="page.SearchResults.arrivalTimeValue" /> */}
                      {flight.arrival_time}
                    </span>
                    <div className="text-xs">
                      {/* <FormattedMessage id="page.SearchResults.destinationValue" /> */}
                      {flight.destination_city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions flex items-center  justify-between">
              <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-300 text-bg-base-content">
                <div className="stat flex">
                  <div className=" text-sm">USD</div>
                  <div className="stat-value text-sm">
                    {/* <FormattedMessage id="page.SearchResults.priceValueUSD" /> */}
                    {flight.price_in_USD}
                  </div>
                </div>

                <div className="stat flex">
                  <div className=" text-sm">IRR</div>
                  <div className="stat-value text-sm">
                    {" "}
                    {/* <FormattedMessage id="page.SearchResults.priceValueIRR" /> */}
                    {flight.price_in_IRR}
                  </div>
                </div>

                <div className="stat flex">
                  <div className=" text-xs">IQD</div>

                  <div className="stat-value text-sm">
                    {" "}
                    {/* <FormattedMessage id="page.SearchResults.priceValueIQD" /> */}
                    {flight.price_in_IQD}
                  </div>
                </div>
              </div>
              <Link href="/ChoosedFlight">
                <button className="btn btn-warning btn-wide">
                  <FormattedMessage id="page.SearchResults.choose" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
