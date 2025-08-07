import Background from "./components/layout/background";
import Hero from "./components/layout/hero";
import NavBar from "./components/layout/navbar";
import Experience from "./components/layout/experience";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#e4e6eb] font-jetbrains gap-10 text-slate-700 flex flex-col">
      {/* <Background /> */}
      <NavBar />
      <Hero />
      <Experience />
    </div>
  );
}
