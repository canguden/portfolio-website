// components/ViewCounter.js
import { useState, useEffect } from "react";

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Increment the count on the server
    fetch("/api/increment")
      .then((response) => response.json())
      .then((data) => setViewCount(data.count))
      .catch((error) => console.error("Error incrementing view count:", error));
  }, []);

  return (
    <div className="text-center my-2 mx-2">
      <p className="">
        Website Views: <span id="views">{viewCount}</span>
      </p>
    </div>
  );
};

export default ViewCounter;
