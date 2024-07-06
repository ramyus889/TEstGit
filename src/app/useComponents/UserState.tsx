"use client";

import { Button } from "@nextui-org/react";
import React from "react";

export default function Home() {
  const [color, setColor] = React.useState("red");
  const [count, setCount] = React.useState(0);
  const [car, setCar] = React.useState({
    color: "Blue",
    brand: "2109",
    year: "2007",
    price: "30000",
  });

  const colors = ["red", "green", "blue", "yellow"];

  const changeCar = () => {
    setCar({
      color: "Gray",
      brand: "21099",
      year: "2003",
      price: "10000",
    });
  };

  const changeColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="">useState</div>
      <div className="flex flex-col gap-5">
        <div
          style={{ backgroundColor: color }}
          className="p-10 text-center text-[23px]"
        >
          {color}
        </div>
        <Button onClick={changeColor} className="">
          Click
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="">color - {car.color}</div>
        <div className="">Brand - {car.brand}</div>
        <div className="">Year - {car.year}</div>
        <div className="">Price - {car.price}</div>
        <Button onClick={changeCar}>Car</Button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="rounded-xl border border-slate-500 py-3 text-center">
          {count}
        </div>
        <Button onClick={() => setCount(count + 1)}>Count +</Button>
        <Button onClick={() => setCount(count * 2)}>Count *</Button>
        <Button onClick={() => setCount(count - 1)}>Count -</Button>
        <Button onClick={() => setCount(count / 2)}>Count /</Button>
      </div>
    </div>
  );
}
