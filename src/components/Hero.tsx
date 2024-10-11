import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import About from "./About";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import Project from "./Project";
import Skills from "./Skill";
import Head from "next/head";
import Contact from "./contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />

      <hr />

      <section className="flex justify-between items-center custom-bg-color bg-white bg-opacity-5 custom-w p-10">
        <div className="custom-w2 font-semibold text-left">
          <h3 className="text-3xl text-cyan-400">
            <span className="text-orange-500 ml-1">Hi </span>
            <span className="text-white">,</span> It me
          </h3>
          <h1 className="text-6xl font-extrabold font-sans text-orange-500 tracking-normal">
            <span className="text-cyan-400 tracking-normal text-7xl">Ali </span>
            Askari
          </h1>
          <h3 className="text-3xl text-orange-500 mt-2">
            A Passionate <br />
            <span className="text-cyan-400 font-extrabold text-5xl">
              Front{" "}
              <span className="text-orange-500 font-extrabold text-4xl">
                {" "}
                End-Developer
              </span>
            </span>
          </h3>

          <a
            href="https://hackathon-milestones-nu.vercel.app/"
            title="Click to download"
            className="flex justify-center h-14 items-center mt-10 rounded-full px-6 bg-black text-orange-500 font-semibold transition-all duration-300 ease-in-out transform hover:bg-cyan-400 hover:text-black hover:font-bold hover:scale-105 w-52 font-sans cursor-pointer"
          >
            <span className="pl-2 pr-1">Download-CV</span>
            <DownloadIcon />
          </a>

          <a
            href="https://github.com/AliAskariGithub"
            title="Visit github"
            className="flex justify-center h-14 items-center mt-2 rounded-full px-6 bg-black text-orange-500 font-semibold transition-all duration-300 ease-in-out transform hover:bg-cyan-400 hover:text-black hover:font-bold hover:scale-105 w-44 font-sans cursor-pointer"
          >
            <span className="pl-2 pr-1">Visit Github</span>
            <GitHubIcon />
          </a>
        </div>

        <Image
          src="/Mypicture.jpg"
          alt="Profile Photo"
          width={400}
          height={400}
          className="w-full h-auto rounded-full border-4 border-black custom-border custom-m custom-shadow"
        />
      </section>

      <hr />

      <About />

      <hr />

      <Project />

      <hr />

      <div>
        <Head>
          <title>Protfolio</title>
        </Head>

        <Skills />
      </div>

      <hr />

      <Contact />

      <hr />

      <Footer />
    </div>
  );
};

export default Hero;
