import Hero from "./components/layout/hero";
import NavBar from "./components/layout/navbar";
import Experience from "./components/layout/experience";
import Project from "./components/layout/project";
import ThemeToggle from "./components/elements/ThemeToggle/themetoggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>

      {/* Background  Effect */}

      {/* Navbar */}
      <NavBar />

      {/* Main Content*/}
      <Hero />
      <Project />

      {/* Footer */}

    </div>
  );
}
