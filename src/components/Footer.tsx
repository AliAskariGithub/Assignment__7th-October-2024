import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="bg-gray-950 bg-opacity-5 custom-bg-color px-56 py-12">
      <center className="grid grid-cols-1 md:grid-cols-5 px-32 justify-center items-center w-full">
        <Link
          href="https://www.linkedin.com/in/ali-askari-355257308/"
          className="custom-design w-10 flex justify-center items-center rounded-full h-10 hover:text-white transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-blue-500 duration-300"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/AliAskariGithub"
          className="custom-design w-10 flex justify-center items-center rounded-full h-10 text-black transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-white"
        >
          <GitHubIcon className="hover:text-black" />
        </Link>
        <Link
          href="https://twitter.com/AliAskari"
          className="custom-design w-10 flex justify-center items-center rounded-full h-10 hover:text-white transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-black"
        >
          <XIcon />
        </Link>
        <Link
          href="https://vercel.com/ali-askaris-projects"
          className="custom-design w-10 opacity-55 bg-transparent hover:opacity-100 flex justify-center items-center rounded-full h-10 hover:text-white transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-black"
        >
          <Image src={"/vercel.png"} alt="" height={50} width={40}></Image>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61564881342854"
          className="custom-design w-10 flex justify-center items-center rounded-full h-10 hover:text-white transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-blue-700"
        >
          <FacebookIcon />
        </Link>
      </center>

      <center className="grid grid-cols-1 md:grid-cols-5 px-24 mt-4 justify-center items-center w-full font-sans">
        <Link
          href={"#hero"}
          className="custom-design w-16 flex justify-center items-center h-10 hover:text-white transition delay-150 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="custom-design w-12 flex justify-center items-center h-10 hover:text-white transition delay-150 hover:-translate-y-1"
        >
          About
        </Link>
        <Link
          href={"#projects"}
          className="custom-design w-12 flex justify-center items-center h-10 hover:text-white transition delay-150 hover:-translate-y-1"
        >
          Projects
        </Link>
        <Link
          href={"#skills"}
          className="custom-design w-12 flex justify-center items-center h-10 hover:text-white transition delay-150 hover:-translate-y-1"
        >
          Skills
        </Link>
        <Link
          href={"#contact"}
          className="custom-design w-12 flex justify-center items-center h-10 hover:text-white transition delay-150 hover:-translate-y-1"
        >
          Contact
        </Link>
      </center>

      <center className="grid grid-cols-1 md:grid-cols-1 px-32 justify-center items-center w-full mt-5 -mb-9 text-xs font-sans custom-w3">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Ali Askari | All rights reserved.
        </p>
      </center>
    </footer>
  );
};

export default Footer;
