"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return <div className="">{children}</div>;
}
