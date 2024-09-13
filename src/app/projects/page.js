// pages/software-projects.js
"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function SoftwareProjects() {
  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col items-center px-8 lg:px-20 py-8 relative">
        {/* Logo Container */}
        <div className="flex justify-center items-center mb-12">
          {/* Replace these image src with the paths to your logo images */}
          <a href="https://github.com/aaryanmittal154">
            <img src="ghwb.png" alt="Logo 1" className="h-24 w-auto mx-4" />
          </a>
          <a href="https://gitlab.com/users/aaryanmittal154/projects">
            <img src="glfpw.png" alt="Logo 2" className="h-16 w-auto mx-4" />
          </a>
          {/* Add more logos as needed */}
        </div>

        {/* Rotated 'PROJECTS' text on the left */}
        <div className="absolute text-white text-8xl font-extrabold transform -rotate-90 top-1/2 left-2 lg:left-8 origin-center z-0 opacity-10">
          PROJECTS
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl w-full">
          {/* Timeline of Software Projects */}
          <div className="pl-8 space-y-12">
            {softwareProjects.map((project, index) => (
              <TimelineItem key={index} {...project} />
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

// Data for software projects
const softwareProjects = [
  {
    company: "DirectRep",
    role: "Full Stack Software Engineer",
    duration: "Nov 2022 - Dec 2022",
    link: "https://gitlab.com/aaryanmittal154/direct-rep",
    description: [
      "An application helping citizens vocalize their issues through AI-generated letters to their elected representatives.",
      "Led the team to engineer the application’s structure, design, and webframe through Justinmind Application to establish a vivid workflow for the team.",
      "Incorporated FastAPI microservices to develop the models, PostgreSQL to manage users and letters database, and React UI to create a seamless user experience and a cohesive system.",
      "Introduced API to generate data based on the user’s location and to generate AI letters. Configured authentication for users, which led to better user privacy and provided a personalized user experience.",
    ],
  },
  {
    company: "AutoEase",
    role: "Full Stack Software Engineer",
    duration: "Dec 2022 - Jan 2023",
    link: "https://gitlab.com/aaryanmittal154/autoease",
    description: [
      "Full Stack application to optimize sales and streamline appointment scheduling for automotive dealerships.",
      "Developed microservices for various models using RESTful principles and implemented polling for faster data retrieval, resulting in a 35% improvement in speed.",
      "Utilized Django for the backend models and designed and developed webpages with React to achieve a smooth and visually appealing user interface.",
    ],
  },
  {
    company: "Conference Go",
    role: "Full Stack Software Engineer",
    duration: "Jan 2023 - Feb 2023",
    link: "https://gitlab.com/aaryanmittal154/conference-go",
    description: [
      "A web application for structured organization and management of events and conferences.",
      "Configured the architecture from monolith to microservices in Django and introduced pub/sub, polling, and messaging queues through RabbitMQ to improve the data communication and efficiency of the application.",
      "Deployed Docker to structure servers for the new domain-driven design to enhance scalability.",
      "Introduced third-party API for elaboration by adding weather and photos for conference locations and designed the application’s front end through Bootstrap CSS to enhance the website’s interface.",
    ],
  },
  {
    company: "Sentiment Analysis",
    role: "Machine Learning Engineer",
    duration: "Feb 2023 - Mar 2023",
    link: "https://github.com/aaryanmittal154/SentimentAnalysis",
    description: [
      "A project where I developed a machine learning model for sentiment analysis of tweets.",
      "Developed and deployed machine learning models to analyze sentiment in tweets with high accuracy.",
      "Leveraged tools and technologies such as TensorFlow, Keras, and Scikit-Learn, achieving 90% accuracy.",
    ],
  },
  {
    company: "Image Classification",
    role: "Machine Learning Engineer",
    duration: "Mar 2023 - Apr 2023",
    link: "https://github.com/aaryanmittal154/ImageClassification",
    description: [
      "Developed a CNN model using TensorFlow and Keras to classify images into ten different categories in the CIFAR-10 dataset.",
      "Preprocessed the data by normalizing pixel values and performing data augmentation techniques to enhance model generalization.",
      "Optimized the model by tuning hyperparameters, implementing dropout, and using batch normalization to improve accuracy and reduce overfitting.",
      "Achieved high accuracy in classifying images, showcasing the model's effectiveness in handling real-world image data.",
    ],
  },
];

function TimelineItem({ company, role, duration, link, description }) {
  return (
    <div className="relative">
      {/* Content Box */}
      <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg hover-scale">
        <h2 className="text-2xl text-white font-bold">{company}</h2>
        <h3 className="text-lg text-gray-400 mb-2">
          {role} ({duration})
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 text-sm underline mb-4 inline-block"
          >
            project link
          </a>
        )}
        <ul className="text-gray-300 text-base leading-relaxed list-disc pl-5">
          {description.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
