"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">
        "How do we know that you are a good candidate?"
      </h2>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center p-8 rounded-lg shadow-2xl border-4 bg-background/80 backdrop-blur-sm">
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Decorative Blob */}
          <svg
            className="absolute w-full h-full text-green-400/30 -z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M48.4,-64.8C62.3,-54.2,72.9,-39.1,76.9,-22.7C80.9,-6.3,78.3,11.4,70.4,26.4C62.5,41.4,49.3,53.7,34.6,62.6C19.9,71.5,3.7,77,-12.8,75.8C-29.3,74.6,-46.1,66.7,-58.5,54.2C-70.9,41.7,-78.9,24.6,-79.8,7.1C-80.7,-10.3,-74.5,-28.2,-63.3,-42.2C-52.1,-56.2,-35.9,-66.3,-19.5,-70.7C-3.1,-75.1,14.7,-74.3,29.1,-71.4C43.5,-68.5,53.4,-63.3,48.4,-64.8Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
          <Image
            src={"/assets/pp.jpeg"}
            alt="Profile Picture"
            width={400}
            height={550}
            className="shadow-2xl rounded-lg object-cover h-[550px]"
          ></Image>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-bold">Say No More!</h2>
          <p className="max-w-2xl text-justify">
            A detail-oriented Full Stack Developer with a strong commitment to
            writing clean, maintainable code.
            <br />
            With over a year of experience at an IT consultancy, I have
            delivered robust solutions for the demanding banking industry,
            building my foundation in enterprise technologies like{" "}
            <span className="font-bold text-[#0CB36B]">
              Java, Spring Boot, and Oracle.
            </span>
            <br />
            Driven by a passion for continuous learning, I am currently
            advancing my expertise through an intensive full-stack bootcamp. I
            am deepening my understanding of modern technology stack—including{" "}
            <span className="font-bold text-[#0CB36B]">
              TypeScript, React, Next.js, Node.js, Express
            </span>
            —with a focus on performance and development best practices. <br />I
            am actively seeking a full-time role where I can leverage my
            combined experience to build innovative, efficient, and highly
            scalable web applications that deliver exceptional user value.
          </p>
          <a
            href="#skills"
            className="mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-[#0CB36B] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
          >
            My Skill
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
