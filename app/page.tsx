import Particles from "./components/Particles/Particles";
import TypingText from "./components/TextType/TextType";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-[#19222D]">
      <div className="w-full h-full relative bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div>
        <TypingText
          text={[
            "Full Stack Developer",
            "Backend Developer",
            "Software Developer",
            "Game Developer",
          ]}
          typingSpeed={200}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
