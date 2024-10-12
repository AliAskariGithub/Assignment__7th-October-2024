import Image from "next/image";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const About = () => {
  return (
    <div>
      <section className="flex justify-between items-center custom-bg-color bg-white bg-opacity-5 custom-w p-20">
        <div id="about">
          <h2 className="text-left text-8xl font-extrabold font-sans text-orange-500 tracking-normal">
            <span className="text-cyan-400 text-6xl tracking-normal">
              About{" "}
            </span>
            Me
          </h2>
          <h3 className="mt-5 font-extrabold text-5xl text-orange-500 mb-4">
            Front{" "}
            <span className="text-cyan-400 text-4xl font-extrabold">
              End-Developer
            </span>
          </h3>
          <p className="text-lg font-medium custom-w3">
            I am a passionate frontend developer with a strong foundation in
            HTML, CSS, TypeScript and Next.js. Over the years, I have honed my
            skills by working on various projects, including{" "}
            <a href="https://github.com/AliAskariGithub" className="text-white">
              [ Hackathon Challenges ]
            </a>
            , which have allowed me to experiment with innovative web designs
            and responsive layouts. My primary goal is to create intuitive,
            user-friendly interfaces that deliver seamless experiences across
            devices.
            <br />
            <br />
            Driven by a love for coding and problem-solving, I continuously
            strive to expand my knowledge and improve my craft. As I work toward
            becoming a successful developer, I am dedicated to building robust
            web applications and contributing to the tech community.
          </p>

          <a
            href="#projects"
            className="flex justify-center items-center rounded-full custom-m4"
          >
            <KeyboardArrowDownIcon />
          </a>

          <a
            href="#hero"
            className="flex justify-center items-center rounded-full custom-m3"
          >
            <KeyboardArrowUpIcon />
          </a>

          <a href="#services" className="slide-2">
            <i className="bx bx-down-arrow-alt"></i>
          </a>
        </div>

        <Image
          src={"/aboutme.webp"}
          alt="About Me Photo"
          width={400}
          height={400}
          className="flex justify-center items-center rounded-full border-4 border-slate-300 custom-border custom-m2 custom-shadow"
        ></Image>
      </section>
    </div>
  );
};

export default About;
