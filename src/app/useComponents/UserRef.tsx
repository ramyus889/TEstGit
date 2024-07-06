"use client";

import React, { useEffect } from "react";
import { Button, Input } from "@nextui-org/react";

export default function Home() {
  const [value, setValue] = React.useState(0);
  const count = React.useRef(0);
  const inputElem = React.useRef();

  const btnclicked = () => {
    inputElem.current;
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="flex flex-col gap-10">
      <div className="">useRef</div>
      <div className="flex flex-col gap-5">
        <Button
          onClick={() => {
            setValue((value) => value - 1);
          }}
        >
          Click -
        </Button>

        <div className="rounded-xl border border-slate-500 py-3 text-center text-[23px]">
          {value}
        </div>

        <Button
          onClick={() => {
            setValue((value) => value + 1);
          }}
        >
          Click +
        </Button>

        <div className="">Render Count: {count.current}</div>
      </div>
    </div>
  );
}
