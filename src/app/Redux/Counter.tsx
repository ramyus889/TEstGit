"use client";

import { Button } from "@nextui-org/react";
import React from "react";

export default function MPage() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="flex items-center gap-5">
      <Button className="" onClick={decrement}>
        -
      </Button>
      {count}
      <Button className="" onClick={increment}>
        +
      </Button>
    </div>
  );
}
