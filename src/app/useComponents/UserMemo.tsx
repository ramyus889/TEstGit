"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";

export default function Home() {
  const [number, setNumber] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  function cubeNum(num: number) {
    return Math.pow(num, 3);
  }

  const result = React.useMemo(() => cubeNum(number), [number]);

  return (
    <div className="flex flex-col gap-10">
      <div className="">useMemo</div>
      <div className="flex flex-col gap-5">
        <Input
          type="number"
          value={number.toString()}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <h1>{result}</h1>
        <Button onClick={() => setCounter(counter + 1)}>Counter +</Button>
        <h1>{counter}</h1>
      </div>
    </div>
  );
}
