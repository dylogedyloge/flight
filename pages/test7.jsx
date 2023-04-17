import { useState, useEffect } from "react";

const MyComponent = () => {
  const [myData, setMyData] = useState(null);

  // Load data from local storage on mount
  useEffect(() => {
    const data = localStorage.getItem("myData");
    if (data) {
      setMyData(JSON.parse(data));
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(myData));
  }, [myData]);

  const handleDataChange = (newData) => {
    setMyData(newData);
  };

  // Render your component here
  return (
    <div>
      <p>My data: {myData}</p>
      <button onClick={() => handleDataChange("New data")}>Change data</button>
    </div>
  );
};
export default MyComponent;
