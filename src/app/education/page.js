"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function Education() {
  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col items-center px-8 lg:px-20 py-8 relative">
        {/* Container for the top logos */}
        <div className="flex justify-center items-center w-full max-w-4xl mb-8 space-x-4">
          {/* Replace with your actual logo URLs */}
          <img
            src="/slm.png"
            alt="Stanford Logo"
            className="h-12 w-24 object-contain"
          />
          <img
            src="/hr.png"
            alt="Hack Reactor Logo"
            className="h-12 w-24 object-contain"
          />
          <img
            src="/dlai.png"
            alt="Deep Learning Specialization Logo"
            className="h-12 w-24 object-contain"
          />
          <img
            src="/tisb.png"
            alt="The International School Bangalore Logo"
            className="h-12 w-24 object-contain"
          />
          {/* Add other logos here if necessary */}
        </div>

        {/* Rotated 'EDUCATION' text on the left */}
        <div
          className="absolute text-white text-8xl font-extrabold transform -rotate-90 left-0 lg:left-4 origin-center z-0 opacity-10"
          style={{ top: "50%", transform: "translateY(-50%) rotate(-90deg)" }}
        >
          EDUCATION
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl w-full">
          {/* Timeline of Education Experiences */}
          <div className="pl-8 space-y-12">
            {educationExperiences.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
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

          /* Waving hand animation */
          @keyframes wave {
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

          .animate-wave {
            display: inline-block;
            animation: wave 2s infinite;
            transform-origin: 70% 70%;
          }
        `}</style>
      </div>
    </div>
  );
}

// Data for education experiences
const educationExperiences = [
  {
    institution: "Stanford University, USA",
    program:
      "Visiting Undergraduate | Machine Learning & Technology Entrepreneurship",
    duration: "June 2023 - August 2024",
    logo: "slm.png",
    description: [
      "Technology Entrepreneurship: Completed a 4-credit course focusing on the fundamentals of launching and managing technology-based ventures.",
      "Machine Learning: Completed a 3-credit course covering essential machine learning concepts, algorithms, and applications.",
      "HPC-AI Summer Seminar Series: Participated in a 1-credit seminar series on High-Performance Computing and Artificial Intelligence, gaining insights into cutting-edge AI technologies and their applications.",
      "CS 106A: Programming Methodology: Completed a 5-credit course on programming fundamentals using Java, emphasizing software engineering principles and problem-solving techniques.",
      "Stats 216V: Introduction to Statistical Learning: Completed a course on the principles of statistical learning, covering key topics in regression, classification, and statistical modeling.",
    ],
  },
  {
    institution: "Hack Reactor, USA",
    program: "Advanced Software Engineering Immersive Certificate (Online)",
    duration: "2022",
    logo: "hr.png",
    link: {
      href: "https://drive.google.com/file/d/1qanqAFBpDH7AO5gN7OjYfJM7FNO8W3CH/view",
      text: "Certificate Link",
    },
    description: [
      "Completed 774 hours of intensive, hands-on coursework in software engineering, specializing in JavaScript and Python.",
      "Achieved a position in the top 10% of the class, demonstrating strong technical skills and a deep understanding of software engineering concepts.",
      "Recognized as the youngest participant in the cohort, showcasing exceptional talent and commitment to learning and growth in a highly competitive environment.",
    ],
  },
  {
    institution: "Deep Learning Specialization",
    program: "Stanford Online & DeepLearning.AI | 5-Course Series",
    logo: "dlai.png",
    link: {
      href: "https://www.coursera.org/account/accomplishments/specialization/LV99MU87CM3P",
      text: "Specialization Link",
    },
    description: [
      "Structuring Machine Learning Projects: Completed a 20-hour course on best practices for structuring machine learning projects for maximum effectiveness.",
      "Convolutional Neural Networks: Completed a 25-hour course covering CNN architectures and their applications in computer vision.",
      "Neural Networks and Deep Learning: Completed a 25-hour course on foundational deep learning concepts, including neural networks and backpropagation.",
      "Sequence Models: Completed a 25-hour course on sequence models, including Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM), and their applications in natural language processing.",
      "Improving Deep Neural Networks: Completed a 25-hour course on hyperparameter tuning, regularization techniques, and optimization strategies for deep learning models.",
    ],
  },
  {
    institution: "Machine Learning Specialization",
    program: "Stanford Online & DeepLearning.AI | 3-Course Series",
    logo: "dlai.png",
    link: {
      href: "https://www.coursera.org/account/accomplishments/specialization/E5Q542Y757LX",
      text: "Specialization Link",
    },
    description: [
      "Supervised Machine Learning: Regression and Classification: Completed a 15-hour course on supervised learning techniques, including linear regression, logistic regression, and classification algorithms.",
      "Advanced Learning Algorithms: Completed a 20-hour course covering advanced machine learning algorithms and their applications in various domains.",
      "Unsupervised Learning, Recommenders, Reinforcement Learning: Completed a 15-hour course on unsupervised learning methods, recommendation systems, and reinforcement learning fundamentals.",
    ],
  },
  {
    institution: "The International School Bangalore, India",
    program: "High School | IB Diploma & IGCSE",
    duration: "2016 - 2022",
    logo: "dlai.png",
    description: [
      "IB Diploma: Studied the following subjects - Mathematics HL, Physics HL, Chemistry HL, Economics SL, English SL, Spanish SL.",
      "IGCSE: Completed courses in English, Physics, Chemistry, Additional Mathematics, Computer Science, Business Management, Economics & Hindi.",
    ],
  },
];

function TimelineItem({ institution, program, duration, link, description }) {
  return (
    <div className="relative">
      {/* Content Box */}
      <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg hover-scale">
        <h2 className="text-2xl text-white font-bold">{institution}</h2>
        <h3 className="text-lg text-gray-400 mb-2">
          {program} ({duration})
        </h3>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 text-sm underline mb-4 inline-block"
          >
            {link.text}
          </a>
        )}
        <ul className="list-disc pl-6 text-gray-300">
          {description.map((course, index) => (
            <li key={index} className="mb-2">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
