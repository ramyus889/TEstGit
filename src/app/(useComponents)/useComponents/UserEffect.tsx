"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="">useEffect</div>
      <div className="flex flex-col gap-5">
        <div className="text-[23px]">{count}</div>
        {/* <Button onClick={() => setCount(count + 1)}>Click</Button> */}
      </div>
    </div>
  );
}
