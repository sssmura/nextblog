"use client";
import Link from "next/link";
import { useState } from "react";
export function Nav() {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleActive = (idx: number) => {
    setActiveIdx(idx);
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between items-center">
        <li onClick={() => handleActive(0)} className="nav-item">
          <Link
            href="/"
            className={
              "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 " +
              (activeIdx === 0 ? "bg-gray-900" : "")
            }
          >
            Home
          </Link>
        </li>
        <li onClick={() => handleActive(1)} className="nav-item">
          <Link
            href="/blog"
            className={
              "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" +
              " " +
              (activeIdx === 1 ? "bg-gray-900" : "")
            }
          >
            Blog
          </Link>
        </li>
        <li onClick={() => handleActive(2)} className="nav-item">
          <Link
            href={"/works"}
            className={
              "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" +
              " " +
              (activeIdx === 2 ? "bg-gray-900" : "")
            }
          >
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
}
