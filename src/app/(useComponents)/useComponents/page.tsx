"use client";

import React from "react";
import UserState from "./UserState";
import UserEffect from "./UserEffect";
import UserRef from "./UserRef";
import UserMemo from "./UserMemo";
import UserCallback from "./UserCallback";

export default function Home() {
  const components = [
    {
      id: 1,
      component: <UserState />,
    },
    {
      id: 2,
      component: <UserEffect />,
    },
    {
      id: 3,
      component: <UserRef />,
    },
    {
      id: 4,
      component: <UserMemo />,
    },
    {
      id: 5,
      component: <UserCallback />,
    },
  ];
  return (
    <div className="mx-20 my-20 w-[700px]">
      {components.map((item) => (
        <div key={item.id} className="border-b-2 border-t-2 border-white py-10">
          {item.component}
        </div>
      ))}
    </div>
  );
}
