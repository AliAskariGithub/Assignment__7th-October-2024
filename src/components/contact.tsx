import React from "react";
import { Button } from "./ui/button";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Contact = () => {
  return (
    <div>
      <section className="flex justify-between items-center custom-bg-color bg-white bg-opacity-5 custom-w p-20">
        <div id="contact">
          <h1 className="text-left font-extrabold font-sans text-cyan-400 text-7xl tracking-normal mb-12">
            Contact{" "}
            <span className="text-6xl text-orange-500 tracking-normal">
              {" "}
              Me
            </span>
          </h1>

          <div className="grid justify-between items-center text-center bg-black bg-opacity-30 border-2 border-gray-400 hover:border-white duration-300 custom-w4 p-14 ml-duration-300 ml-20">
            <h2 className="text-5xl font-bold">
              <span className="text-sky-400">Personal</span> <br />{" "}
              <span className="text-orange-500">Information</span>
            </h2>

            <form className="mt-10">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  title="Enter your full name"
                  required
                  className="p-2 border border-gray-300 rounded w-full mb-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your E-mail"
                  title="sample@email.com"
                  required
                  className="p-2 border border-gray-300 rounded w-full  mb-4"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                title="Enter your valid/active phone number"
                required
                className="p-2 border border-gray-300 rounded w-full  mb-4"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                title="Let us know about your topic"
                required
                className="p-2 border border-gray-300 rounded w-full  mb-4"
              />

              <textarea
                name="message"
                cols={30}
                rows={5}
                placeholder="Your Message"
                title="Write your description"
                required
                className="p-2 border border-gray-300 rounded w-full mb-4 text-black"
              ></textarea>

              <div className="text-right">
                <Button
                  type="submit"
                  variant={"default"}
                  className="hover:text-white bg-transparent hover:bg-transparent w-44 duration-500 custom-w3"
                >
                  <span className="mr-2 hover:border-b-2">Send Message </span>{" "}
                  <SendIcon />
                </Button>
              </div>
            </form>
          </div>

          <a
            href="#hero"
            className="flex justify-center items-center rounded-full custom-m8"
          >
            <KeyboardArrowUpIcon />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
