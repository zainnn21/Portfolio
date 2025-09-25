import PillNav from "../elements/PillNav/PillNav";
import { ContactButton } from "../../utils/ContactMail";

const navbarv2 = () => {
  const email = "habibzain.anis@gmail.com";
  const subject = "Saya Dari ....";
  const body =
    "Halo Zain, Saya menulis email ini setelah melihat portofolio Anda .... \n\n\n Hormat saya [Nama Anda] \n\n [Perusahaan/Organisasi Anda, jika ada]";
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
          { label: "Experience", href: "#experience" },
          { label: "Education", href: "#education" },
          {
            label: "Contact Me",
            href: `mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
          },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
      />
    </div>
  );
};
export default navbarv2;
