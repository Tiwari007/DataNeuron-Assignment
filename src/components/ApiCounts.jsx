import React from 'react'

const ApiCounts = ({ count }) => {
    return (
      <div className="h-1/2 p-2 bg-gray-200 flex items-center justify-center flex-col">
        <h2>How Many Times we hit the API calls</h2>
        <p>Count: {count}</p>
      </div>
    );
  };

export default ApiCounts