"use client";
import React from "react";
import Link from "next/link"; // Import Link from Next.js

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-20 py-8 md:py-16">
      {/* Introduction Section */}
      <div className="text-center text-white mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hi, <span className="wave">👋</span>
        </h1>
        <p className="text-base md:text-lg max-w-xs md:max-w-3xl">
          I am Aaryan, a 20-year-old based in Palo Alto.
        </p>
        <p className="text-base md:text-lg max-w-xs md:max-w-2xl mt-2">
          This website provides an overview of my experiences, projects, and
          learnings from the past few years.
        </p>
        <p className="text-base md:text-lg mt-4">
          reach out at:{" "}
          <a
            href="mailto:aaryan7@stanford.edu"
            className="text-green-300 underline"
          >
            aaryan7@stanford.edu
          </a>
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <Link
          href="/work"
          className="text-white text-xl md:text-2xl hover:text-green-300 transition duration-300"
        >
          Work
        </Link>
        <Link
          href="/projects"
          className="text-white text-xl md:text-2xl hover:text-green-300 transition duration-300"
        >
          Projects
        </Link>
        <Link
          href="/education"
          className="text-white text-xl md:text-2xl hover:text-green-300 transition duration-300"
        >
          Education
        </Link>
        <Link
          href="/technical"
          className="text-white text-xl md:text-2xl hover:text-green-300 transition duration-300"
        >
          Skills
        </Link>
      </div>

      {/* CSS for Waving Hand Animation */}
      <style jsx>{`
        .wave {
          display: inline-block;
          animation: wave-animation 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
