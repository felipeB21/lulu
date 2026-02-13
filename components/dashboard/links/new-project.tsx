"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewProjectLink() {
  return (
    <Link href="/dashboard/new-project">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="text-3xl font-bold font-heading flex items-center gap-3 text-primary-500 w-max"
      >
        Crear nuevo proyecto
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M8 6h10"
            variants={{ rest: { x: 0 }, hover: { x: -2 } }}
          />
          <motion.path
            d="M6 12h12"
            variants={{ rest: { x: 0 }, hover: { x: 0 } }}
          />
          <motion.path
            d="M11 18h7"
            variants={{ rest: { x: 0 }, hover: { x: -5 } }}
          />
        </svg>
      </motion.div>
    </Link>
  );
}
