import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const FLIGHT_SEARCH_API = "https://newcash.me/api/v2/airfare/flights/search";

const FlightSearch = () => {
  const { isLoading, isError, data, error } = useQuery(
    "flightSearch",
    async () => {
      const response = await fetch(FLIGHT_SEARCH_API, {
        method: "POST",
        headers: {
          debug: "true",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: 81,
          to: 82,
          date: "2023-04-16",
          adult_count: 1,
          child_count: 0,
          infant_count: 0,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
  // console.log(data.data.tickets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // if (!Array.isArray(data.data.tickets)) {
  //   return <div>Error: Data is not an array</div>;
  // }

  return (
    <div>
      {data.data.tickets.map((flight) => (
        <div key={flight.flight_number}>
          {flight.airline_title} - {flight.price}
        </div>
      ))}
    </div>
  );
};

const queryClient = new QueryClient();

const FlightSearchPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FlightSearch />
    </QueryClientProvider>
  );
};

export default FlightSearchPage;
