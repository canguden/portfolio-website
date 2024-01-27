// components/ViewCounter.js
import { useState, useEffect } from "react";

const ViewCounter = ({ initialCount }) => {
  const [viewCount, setViewCount] = useState(initialCount);

  useEffect(() => {
    // Simulate incrementing view count on page load (you can replace this with your actual tracking logic)
    incrementViewCount();
  }, []);

  const incrementViewCount = () => {
    setViewCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="text-center my-8">
      <p className="text-2xl">
        <span id="views">{viewCount}</span>
      </p>
    </div>
  );
};

export default ViewCounter;
