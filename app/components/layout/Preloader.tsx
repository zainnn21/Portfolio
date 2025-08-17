"use client";

import Image from "next/image";
interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Menggunakan GIF kustom dari direktori public */}
      <Image
        src="/gif/loading.gif"
        alt="Loading animation"
        width={300}
        height={300}
        unoptimized={true} // Penting untuk animasi GIF agar tidak dioptimasi oleh Next.js supaya gambar jadi tidak statis
      />
    </div>
  );
};

export default Preloader;
