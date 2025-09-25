"use client";

export const ContactButton = () => {
  const email = "habibzain.anis@gmail.com";
  const subject = "Saya Dari ....";
  const body =
    "Halo Zain, Saya menulis email ini setelah melihat portofolio Anda .... \n\n Hormat saya[Nama Anda] \n [Perusahaan/Organisasi Anda, jika ada]";

  `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};
