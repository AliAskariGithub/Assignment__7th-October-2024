import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-5 pb-5 pl-20 pr-10 custom-bg-color bg-white bg-opacity-5">
      <h1 className=" font-extrabold text-4xl text-left tracking-widest text-white">
        Ali Askari
      </h1>

      <ul className="font-medium text-xl text-right">
        <Link
          href={"/"}
          className="pl-2 pr-2 mr-1 ml-1 custom-design-1 hover:border-b-2 hover:border-b-orange-500 duration-300 transition"
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="pl-2 pr-2 mr-1 ml-1 custom-design-2 hover:border-b-2 hover:border-b-yellow-300 duration-300 transition"
        >
          About
        </Link>
        <a
          href={"#projects"}
          className="pl-2 pr-2 mr-1 ml-1 custom-design-3 hover:border-b-2 hover:border-b-cyan-400 duration-300 transition"
        >
          Projects
        </a>
        <Link
          href={"#skills"}
          className="pl-2 pr-2 mr-1 ml-1 custom-design-4 hover:border-b-2 hover:border-b-green-400 duration-300 transition"
        >
          Skills
        </Link>

        <Link href={"#contact"}>
          <Button
            variant="ghost"
            className="custom-design secondary font-medium text-xl text-right ml-8"
          >
            Contact Me
          </Button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
