"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Import icons for hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  return (
    <nav className="bg-black py-4 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-center items-center px-4">
        {/* Hamburger menu for mobile */}
        <div className="md:hidden absolute left-4 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex justify-center space-x-8">
          <Link
            href="/"
            className="text-white text-lg hover:text-green-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-white text-lg hover:text-green-300 transition duration-300"
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="text-white text-lg hover:text-green-300 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/education"
            className="text-white text-lg hover:text-green-300 transition duration-300"
          >
            Education
          </Link>
          <Link
            href="/technical"
            className="text-white text-lg hover:text-green-300 transition duration-300"
          >
            Skills
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 px-4">
          <Link
            href="/"
            className="text-white text-lg hover:text-green-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-white text-lg hover:text-green-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="text-white text-lg hover:text-green-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/education"
            className="text-white text-lg hover:text-green-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            href="/technical"
            className="text-white text-lg hover:text-green-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </div>
      )}
    </nav>
  );
}
