"use client";

import { motion } from "framer-motion";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        x: [100, 200, 200, 100, 100],
        y: [100, 100, 200, 200, 100],
        transition: { duration: 10, repeat: Infinity, ease: "linear" },
      }}
      className="rounded-xl border-2 border-[#16fe5c] px-8 py-4"
    >
      {children}
    </motion.div>
  );
}
