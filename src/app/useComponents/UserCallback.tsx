"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import HeadCallback from "./HeadCallback";

export default function Home() {
  const [counter, setCounter] = React.useState(0);

  const newFn = () => {};
  return (
    <div className="flex flex-col gap-10">
      <div className="">useCallback</div>
      <div className="flex flex-col gap-5">
        <HeadCallback />
        <h1>{counter}</h1>
        <Button onClick={() => setCounter(counter + 1)}>Counter +</Button>
      </div>
    </div>
  );
}
