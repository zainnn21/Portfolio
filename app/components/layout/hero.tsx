import TypingText from "../elements/TextType/TextType";
import Image from "next/image";

const HeroLayout = () => {
  return (
    <div className="md:mx-60 bg-[#fefffe] flex border-4 border-[#0d3b24] rounded-lg drop-shadow-2xl shadow-xl">
      <div className="w-1/2 px-16 py-20 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold text-red-400">
            &lt;span&gt;{" "}
            <span className="text-slate-700 font-bold text-xl">
              Hey, I'm Zain
            </span>{" "}
            &lt;/span&gt;
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-700">
              I'm Ready For Job
            </h1>
            <TypingText
              text={["{Full Stack Developer}", "{Game Developer}"]}
              typingSpeed={200}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              className="text-2xl md:text-3xl font-bold"
              textColors={["#0CB36B", "#0CB36B"]}
              cursorClassName="text-black"
            />
          </div>
          <p className="text-xl text-red-400 mt-10">
            &lt;p&gt;{" "}
            <span className="text-slate-700 text-base">
              I'm from Jakarta, I have 1+ year of work experience in building
              web applications especially in the banking company as a full
              stack. currently expanding my skill set by learning javascript, I
              am actively seeking a full-time role where I can leverage my
              existing experience and newly acquired skills in{" "}
              <span className="text-red-400">React, Node.js</span> to contribute
              to innovative projects.
            </span>{" "}
            &lt;/p&gt;
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 m-7">
        <Image
          src="/assets/ppcartoon3.png"
          width={600}
          height={600}
          alt="Photo"
        ></Image>
      </div>
    </div>
  );
};
export default HeroLayout;
