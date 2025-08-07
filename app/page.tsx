import Background from "./components/layout/background";
import Hero from "./components/layout/hero";
import NavBar from "./components/layout/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#e4e6eb] font-jetbrains gap-10">
      {/* <Background /> */}
      <NavBar />
      <Hero />
    </div>
  );
}
