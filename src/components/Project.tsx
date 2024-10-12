import Image from "next/image";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Project = () => {
  return (
    <div>
      <section className="flex justify-between items-center custom-bg-color bg-white bg-opacity-5 custom-w p-20">
        <div id="projects">
          <h2 className="text-left font-extrabold font-sans text-cyan-400 text-8xl tracking-normal mb-12">
            My
            <span className="text-6xl text-orange-500 tracking-normal">
              {" "}
              Projects
            </span>
          </h2>

          <p className="w-11/12 mb-8 custom-tx">
            Ali,s projects include a calculator for basic and scientific
            calculations, interactive portfolios showcasing his web development
            skills, a countdown timer for time tracking, and a digital student
            ID card. These projects demonstrate his proficiency in HTML, CSS,
            TypeScript and Next.js.
          </p>

          <div className="grid justify-center items-center grid-cols-3 grid-rows-2 custom-w3">
            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300 mb-7">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Countdown
                  <br />
                  Timer
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/countdown.webp"}
                  alt=""
                  width={200}
                  height={200}
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://30days-of-30projects-topaz.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>

            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300 mb-7">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Student ID
                  <br />
                  Card
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/studentid.jpg"}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36"
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://assignment-30-sep-2024.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>

            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300 mb-7">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Standard
                  <br />
                  Calculator
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/calculator.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36"
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://projects-for-beginners-calculator.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>

            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Amazon
                  <br />
                  Copy
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/amazon.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36"
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://projects-for-beginners.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>

            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Login
                  <br />
                  Form
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/loginform.jpg"}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36"
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://projects-for-beginners-loginform.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>

            <div className="grid gap-1 grid-cols-1 grid-rows-1 w-64 bg-black bg-opacity-30 mr-12 border-2 border-gray-400 hover:border-white duration-300">
              <center>
                <h2 className="flex justify-center items-center text-center p-4 text-4xl hover:text-white duration-300">
                  Protfolio
                  <br />
                  Practice
                </h2>
              </center>

              <hr />

              <center className="p-4">
                <Image
                  src={"/protfolio.jpg"}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36"
                ></Image>
              </center>

              <hr />

              <center>
                <h3 className="flex justify-center items-center text-center p-2">
                  <a
                    href="https://projects-for-beginners-protfoliopractice-green.vercel.app/"
                    title="Click Me"
                    className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-b-2 hover:border-b-2 hover:border-blue-500 font-medium"
                  >
                    Visit site
                  </a>
                </h3>
              </center>
            </div>
          </div>

          <a
            href="#hero"
            className="flex justify-center items-center rounded-full custom-m5"
          >
            <KeyboardArrowUpIcon />
          </a>

          <a
            href="#skills"
            className="flex justify-center items-center rounded-full custom-m6"
          >
            <KeyboardArrowDownIcon />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
