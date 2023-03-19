// import SortResults from "./SortResults";
// import MatchedResults from "./MatchedResults";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
// import flightData from "../public/dummyData/flightData";
import useSWR from "swr";

var myHeaders = new Headers();
myHeaders.append("debug", "true");
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer VwZERgEQvagvXKqczVxpK8FIxFRFggcnY1IJ8baP"
);
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "laravel_session=eyJpdiI6IkwxVFVZUlJiVDNoUjVpTEFMQnpWOFE9PSIsInZhbHVlIjoiY3dJSGxqbzZJTHMraEpJRCtYUDQyRVJmalp2clYxNTBnNE45bWhNc3ZSd2M5aE0zelBiTlByQ2NHSDN6WEZ0SVdXZzIwNGpkZmVWSEl5bkpPdktkU2p0a1NJTVNpWnJDMjJSQXdVN2U0S1JDSWNOQlM4R1IrNC9RaWF4M28vV3UiLCJtYWMiOiI1ZDVlMDZkN2M2MTM1YTY4ZWM3NGIwNjk1MjZiYTQ0YTc0Y2JiZThhMzdjN2MzNjRlYzE2ODZhM2U0NDYzMzFkIiwidGFnIjoiIn0%3D"
);

var raw = JSON.stringify({
  from: 81,
  to: 82,
  date: "2023-03-27",
  adult_count: 1,
  child_count: 0,
  infant_count: 0,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const fetcher = (url) =>
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

const Results = ({ dir }) => {
  const [sortBy, setSortBy] = useState("price");

  const sortFlights = (a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return a.start_time - b.start_time;
    }
  };

  const { data, error } = useSWR(
    "https://newcash.me/api/v2/airfare/flights/search",
    fetcher
  );

  if (error) return <div>Error loading result</div>;
  if (!data)
    return (
      <div role="status" className="flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

  const sortedFlights = [...data.data.tickets].sort(sortFlights);

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
          key={flight.flight_id}
        >
          <div className="card-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="kbd kbd-md text-sm ">
                {/* <FormattedMessage id="page.SearchResults.classValue" /> */}
                {flight.seat_class}
              </div>
              <div className="kbd kbd-md text-sm ">
                <FormattedMessage id="page.SearchResults.availableSeats" />
                &nbsp;
                {/* <FormattedMessage id="page.SearchResults.availableSeatsValue" /> */}
                {flight.capacity}
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
              <div className="card card-compact  bg-base-100 ">
                <figure>
                  <Image
                    src={flight.airline_icon}
                    alt={flight.airline_title}
                    width="100"
                    height="100"
                  />
                </figure>
                <div className="card-body grid place-content-center">
                  <h2 className="card-title">{flight.airline_title}</h2>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex items-center justify-between" dir="ltr">
                  <div className="flex flex-col w-24">
                    <div className="flex-auto text-xs text-gray-500 my-1 ">
                      <span className="">
                        {/* <FormattedMessage id="page.SearchResults.departureDateValue" /> */}
                        {flight.start_time}
                      </span>
                      <br />
                    </div>
                    <div className="w-full flex-none text-lg  font-bold leading-none">
                      <p>{flight.from_airport}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {/* <FormattedMessage id="page.SearchResults.departureTime" /> */}
                      {flight.start_time}
                    </span>
                    <div className="text-xs">
                      {/* <FormattedMessage id="page.SearchResults.originValue" /> */}
                      {flight.from_airport}
                    </div>
                  </div>
                  <GiAirplaneDeparture className="text-4xl text-blue-600" />
                  <hr className="border-dotted w-full bg-neutral" />

                  <GiAirplaneArrival className="text-4xl text-red-600" />
                  <div className="flex flex-col w-24 ">
                    <div className="flex-auto text-xs text-gray-500 my-1 ">
                      <span className="">
                        {/* <FormattedMessage id="page.SearchResults.arrivalDateValue" /> */}
                        {flight.arrival_time}
                      </span>
                      <br />
                    </div>
                    <div className="w-full flex-none text-lg  font-bold leading-none">
                      <p>{flight.to_airport}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {/* <FormattedMessage id="page.SearchResults.arrivalTimeValue" /> */}
                      {flight.arrival_time}
                    </span>
                    <div className="text-xs">
                      {/* <FormattedMessage id="page.SearchResults.destinationValue" /> */}
                      {flight.to_airport}
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
                    {flight.price}
                  </div>
                </div>

                <div className="stat flex">
                  <div className=" text-xs">IQD</div>

                  <div className="stat-value text-sm">
                    {" "}
                    {/* <FormattedMessage id="page.SearchResults.priceValueIQD" /> */}
                    {flight.price_inIQD}
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
