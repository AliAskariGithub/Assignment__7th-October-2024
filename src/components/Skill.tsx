"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind.css",
    ],
    datasets: [
      {
        label: "Skill Proficiency",
        data: [80, 70, 60, 60, 85, 75, 80], // These are example skill levels, you can adjust them.
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // HTML
          "rgba(54, 162, 235, 0.2)", // CSS
          "rgba(255, 206, 86, 0.2)", // TypeScript
          "rgba(75, 192, 192, 0.2)", // JavaScript
          "rgba(153, 102, 255, 0.2)", // Next.js
          "rgba(255, 159, 64, 0.2)", // React.js
          "rgba(99, 255, 132, 0.2)", // Tailwind.css
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(99, 255, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="min-h-screen flex-col text-white flex justify-between items-center custom-bg-color bg-white bg-opacity-5 custom-w p-20">
      <div id="skills" className="flex justify-between w-full">
        <h1 className="text-8xl font-extrabold text-sky-400 font-sans">
          My <span className="text-orange-500 text-7xl"> Skills</span>
        </h1>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-center w-1/2">
          <h2 className="text-6xl font-bold text-orange-500 mt-2 font-sans custom-w7">
            Skills <span className="text-sky-400 text-5xl">Proficiency</span>
          </h2>

          <div className="mt-6">
            <ul className="text-lg">
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-red-500"></span>{" "}
                HTML
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-blue-500"></span>{" "}
                CSS
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-yellow-500"></span>{" "}
                JavaScript
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-teal-400"></span>{" "}
                TypeScript
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-indigo-500"></span>{" "}
                Next.js
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-orange-600"></span>{" "}
                React.js
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 h-4 mr-2 bg-green-400"></span>{" "}
                Tailwind.css
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-center ">
          <div className="custom-w8 mb-10">
            <Doughnut data={data} />
          </div>
        </div>
      </div>

      <a
        href="#hero"
        className="flex justify-center items-center rounded-full custom-m7"
      >
        <KeyboardArrowUpIcon />
      </a>

      <a
        href="#contact"
        className="flex justify-center items-center rounded-full custom-m6"
      >
        <KeyboardArrowDownIcon />
      </a>
    </section>
  );
};

export default Skills;
