"use client";

import { NavBar } from "./componentsL/nav";

export const Example = () => (
  <div>
    <NavBar
      tabs={[
        "Home",
        "useComponents",
        "Different",
        "AosChildren",
        "practice",
        "Chart",
        "Lukacho",
      ]}
    />
  </div>
);

export default Example;
