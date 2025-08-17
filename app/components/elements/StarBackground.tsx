"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const StarBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // Inisialisasi tsParticles engine hanya sekali di sisi client
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  const particleColor = useMemo(() => {
    return theme === "dark" ? "#e4e2e6" : "#2e2f38"; // Warna partikel untuk tema Midnight / Fog
  }, [theme]);

  const backgroundColor = useMemo(() => {
    // Warna ini harus cocok dengan variabel --background di globals.css
    return theme === "dark" ? "#1c1a20" : "#f6f7f9"; // Warna latar untuk tema Midnight / Fog
  }, [theme]);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: backgroundColor, // Gunakan warna latar belakang dinamis
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: false, // Nonaktifkan interaksi saat hover agar tidak mengganggu
          },
          onClick: {
            enable: false, // Nonaktifkan interaksi saat klik
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "out", // Partikel akan keluar dari canvas
          random: false,
          speed: 0.1, // Kecepatan gerak partikel yang sangat lambat
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120, // Jumlah partikel
        },
        opacity: {
          value: { min: 0.2, max: 0.7 }, // Opasitas sedikit dinaikkan agar lebih terlihat
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 }, // Ukuran partikel yang acak dan kecil
        },
      },
      detectRetina: true,
    }),
    [particleColor, backgroundColor]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="fixed top-0 left-0 w-full h-full -z-10" // Kunci: posisi fixed dan z-index negatif
      />
    );
  }

  return null;
};

export default StarBackground;
