import PillNav from "../elements/PillNav/PillNav";

const navbarv2 = () => {
  return (
    <div className="fixed top-2 left-0 right-0 flex justify-center z-50">
      <PillNav
        logo="/assets/logo-react-lightmode.png"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        logoAlt="Logo"
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
      />
    </div>
  );
};
export default navbarv2;
