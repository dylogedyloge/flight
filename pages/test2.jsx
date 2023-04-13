import { useEffect, useState } from "react";

function MyPage() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const myToken = `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`;
      setToken(myToken);
    };

    fetchToken();
  }, []);
  console.log(token);
  return (
    <div>
      <h1>Bearer Token:</h1>
      <p>{token ? token : "Loading..."}</p>
    </div>
  );
}

export default MyPage;
