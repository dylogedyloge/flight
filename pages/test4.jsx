import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: "Bearer z5uIf6UAJii5973jupYWRi7XYNtq6d4Phh7ePf7W",
    },
  }).then((res) => res.json());

function MyComponent() {
  const { data, error } = useSWR(
    "https://newcash.me/api/v1/airfare/person/list",
    fetcher
  );

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default MyComponent;
