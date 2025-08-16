"use client";

// import Hero from "./components/layout/hero";
// import NavBar from "./components/layout/navbar";
// import Experience from "./components/layout/experience";
// import Project from "./components/layout/project";
// import StarBackground from "./components/elements/StarBackground/starbackground";
import NavbarV2 from "./components/layout/navbarv2";
import ThemeToggle from "./components/elements/ThemeToggle/themetoggle";
import ProfileLayout from "./components/layout/profile";

export default function Home() {
  return (
    <div className="relative flex min-h-screen bg-background text-foreground overflow-x-hidden duration-300 mx-24 transition-colors">
      {/* Theme Toggle */}
      <div className="fixed bottom-0 right-0 mr-4 mb-4 ">
        <ThemeToggle />
      </div>
      <NavbarV2 />
      <div className=" justify-between w-full items-center ">
        <ProfileLayout />
      </div>
    </div>
  );
}
