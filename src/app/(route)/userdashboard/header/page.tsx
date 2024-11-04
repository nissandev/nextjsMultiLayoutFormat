"use client";
import React, { useState } from "react";

const TopHeader = () => {
  const [count, setCount] = useState(10);
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      This is user top header
      <div className="flex gap-2">
        <button onClick={decreaseCount}>Decrease</button>
        <span>{count}</span>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </div>
  );
};

export default TopHeader;
