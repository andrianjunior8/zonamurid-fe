"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavbarPhone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="rounded-xl w-full p-2 bg-slate-700 relative z-50">
      {/* Burger Button */}
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="p-2 bg-slate-400 rounded-md text-white"
        >
          ☰
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-slate-800 text-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-1/2 max-w-xs opacity-100 z-50`}
      >
        <div className="p-4 flex flex-col">
          <button
            onClick={toggleMenu}
            className="self-end text-xl mb-4 p-2 bg-red-500 rounded-md w-10 h-10 items-center justify-center flex"
          >
            ✕
          </button>
          <Link href="/" className="py-2 px-4 hover:bg-slate-600 rounded-md">
            <button>Home</button>
          </Link>
          <Link
            href="/about"
            className="py-2 px-4 hover:bg-slate-600 rounded-md"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="py-2 px-4 hover:bg-slate-600 rounded-md"
          >
            Courses
          </Link>
          <Link
            href="/feature"
            className="py-2 px-4 hover:bg-slate-600 rounded-md"
          >
            Feature
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPhone;
