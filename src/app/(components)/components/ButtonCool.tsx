import { CoolMode } from "@/componentsUi/cool-mode";
import { Button } from "@nextui-org/react";
import React from "react";

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}
