"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import {
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaProjectDiagram,
  FaBrain,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiFastapi,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiVisualstudiocode,
  SiRender,
  SiSlack,
  SiInsomnia,
  SiNotion,
} from "react-icons/si";

export default function TechnicalSkills() {
  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col items-center  px-8 lg:px-20 py-8 relative">
        {/* Rotated 'TECHNICAL SKILLS' text on the left */}
        <div
          className="absolute text-white text-8xl font-extrabold transform -rotate-90 left-0 lg:left-4 origin-center z-0 opacity-10"
          style={{ top: "50%", transform: "translateY(-50%) rotate(-90deg)" }}
        >
          ..SKILLS..
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl w-full">
          {/* List of Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {technicalSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Inline CSS for hover effects and animations */}
        <style jsx>{`
          .hover-scale {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-scale:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
          }
        `}</style>
      </div>
    </div>
  );
}

// Data for technical skills with icons
const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python 3", icon: <FaPython className="text-blue-400" /> },
      {
        name: "JavaScript ES6+",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      { name: "SQL", icon: <FaDatabase className="text-green-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    category: "System Design",
    skills: [
      {
        name: "Monoliths",
        icon: <FaProjectDiagram className="text-purple-400" />,
      },
      { name: "Microservices", icon: <FaServer className="text-teal-400" /> },
      {
        name: "Domain-driven design",
        icon: <FaProjectDiagram className="text-purple-400" />,
      },
    ],
  },
  {
    category: "Machine Learning Frameworks",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-400" />,
      },
      { name: "Keras", icon: <SiKeras className="text-red-400" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Django 4", icon: <FaServer className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-blue-500" /> },
    ],
  },
  {
    category: "Front-end",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "React Hooks", icon: <FaReact className="text-teal-400" /> },
      { name: "React Toolkit", icon: <FaReact className="text-indigo-400" /> },
      { name: "Bootstrap", icon: <FaCss3Alt className="text-purple-400" /> },
      { name: "Next.js", icon: <FaReact className="text-black" /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      {
        name: "Visual Studio Code",
        icon: <SiVisualstudiocode className="text-blue-500" />,
      },
      { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "Render", icon: <SiRender className="text-teal-400" /> },
      { name: "Scrums", icon: <FaBrain className="text-yellow-300" /> },
      { name: "Slack", icon: <SiSlack className="text-purple-400" /> },
    ],
  },
];

function SkillItem({ category, skills, description }) {
  return (
    <div className="relative">
      {/* Content Box */}
      <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg hover-scale">
        <h2 className="text-2xl text-white font-bold mb-2">{category}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="text-gray-300 text-base leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-2">
              {skill.icon}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
