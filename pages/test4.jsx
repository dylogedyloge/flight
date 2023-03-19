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

function MyComponent() {
  const { data, error } = useSWR(
    "https://newcash.me/api/v2/airfare/flights/search",
    fetcher
  );

  if (error) return <div>Error loading result</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.data.tickets.map((flight) => (
        <h1 key={flight.flight_id}>{flight.start_time}</h1>
      ))}
    </div>
  );
}

export default MyComponent;
