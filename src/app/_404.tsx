import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const Custom404 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      <main className="flex flex-col items-center space-y-8">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold text-center"
        >
          404 - Halaman Tidak Ditemukan
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-center"
        >
          Maaf, halaman yang Anda cari tidak ditemukan.
        </p>
      </main>
    </div>
  );
};

export default Custom404;
