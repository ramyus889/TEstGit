"use client";

import UseChildren from "./UserChildren";

export default function About() {
  return (
    <div className="mx-20 my-20">
      <div className="inline-block">
        <UseChildren>Framer</UseChildren>
      </div>
    </div>
  );
}
