import { ElementType } from "react";

interface SocmedProps {
  Icon: ElementType;
  sosmedName: string;
  sosmedUrl: string;
}

const Socmed = ({ Icon, sosmedName, sosmedUrl }: SocmedProps) => {
  return (
    <a
      href={sosmedUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kunjungi profil ${sosmedName} saya`}
      // KELAS PENTING UNTUK ANIMASI:
      // - text-muted-foreground: Mengatur warna ikon agar sesuai tema.
      // - hover:text-foreground: Warna saat kursor di atasnya.
      // - transition-colors duration-300: Menambahkan animasi transisi warna selama 0.3 detik.
      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      <Icon className="h-12 w-12 " />
    </a>
  );
};

export default Socmed;
