"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Aaryan Portfolio</title>
        <meta
          name="description"
          content="Aaryan personal website and portfolio."
        />
        <meta property="og:title" content="Aaryan Portfolio" />
        <meta
          property="og:description"
          content="An overview of Aaryan experiences, projects, and learnings."
        />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://www.aaryan-portfolio.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Minimalistic Design */}
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect width="100%" height="100%" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#0d0d0d" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Introduction Section */}
        <div className="text-center text-white max-w-2xl z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I am Aaryan <span className="wave inline-block">👋</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A 20-year-old based in Palo Alto, passionate about technology,
            coding, and continuous learning.
          </p>
          <p className="text-lg md:text-xl mb-8">
            This website provides an overview of my experiences, projects, and
            learnings from the past few years.
          </p>
          <a
            href="mailto:aaryan7@stanford.edu"
            className="text-green-300 text-lg md:text-xl underline hover:text-green-400 transition duration-300"
          >
            Reach out at: aaryan7@stanford.edu
          </a>
          {/* Social Media Links */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <a
              href="https://github.com/aaryanmittal154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              {/* GitHub Icon */}
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234C6.732 20.222 5.897 18.17 5.897 18.17c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.521 11.521 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.922.43.371.815 1.102.815 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aaryanmittal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              {/* LinkedIn Icon */}
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 20h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.25h-3v-5c0-1.105-.895-2-2-2s-2 .895-2 2v5h-3v-9h3v1.158c.663-.949 1.87-1.658 3.223-1.658 2.21 0 4 1.791 4 4v5.5z" />
              </svg>
            </a>
            <a
              href="https://gitlab.com/users/aaryanmittal154/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitLab"
            >
              {/* GitLab Icon */}
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22.9456 9.764L20.2916 2.422C20.1865 2.1181 19.8515 1.95528 19.5476 2.06034C19.3799 2.1194 19.246 2.24931 19.1866 2.41706L16.7316 9.764H7.26294L4.80794 2.41706C4.71342 2.15344 4.43767 1.99375 4.17405 2.08827C4.0063 2.14733 3.87639 2.28123 3.81734 2.44898L1.06234 9.764C0.954143 10.0455 1.0458 10.3614 1.29385 10.5435L11.2552 18.1368C11.4452 18.2823 11.7041 18.2823 11.8942 18.1368L21.8555 10.5435C22.1036 10.3614 22.1952 10.0455 22.087 9.764H22.9456Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mt-12 z-10">
          <Link
            href="/work"
            className="text-gray-400 text-lg md:text-xl hover:text-white transition duration-300"
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 text-lg md:text-xl hover:text-white transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/education"
            className="text-gray-400 text-lg md:text-xl hover:text-white transition duration-300"
          >
            Education
          </Link>
          <Link
            href="/skills"
            className="text-gray-400 text-lg md:text-xl hover:text-white transition duration-300"
          >
            Skills
          </Link>
        </nav>

        {/* CSS for Waving Hand Animation and Background Design */}
        <style jsx>{`
          .wave {
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
    </>
  );
}
