import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banners() {
  return (
    <>
      <div className="sm:container" data-aos="fade-up">
        <div className="md:hidden w-full">
          <Image
            src={"/img/Foto.png"}
            width={400}
            height={400}
            className="mx-auto px-1 py-1 mb-4"
            alt="yoga"
            quality={100}
            priority={true}
          />
        </div>
        <div className="flex flex-wrap lg:px-20" data-aos="fade-up">
          <div className="self-center lg:w-1/2 w-full px-2">
            <div className="max-md:text-center">
              <h1 className="text-green-600 font-bold text-4xl max-md:text-2xl">
                Hi, i'm Yoga Febriatala
              </h1>
              <h1 className="text-white text-2xl mt-4  mb-4 font-semibold max-md:text-xl">
                Full Stack Developer
              </h1>
              <p className="text-secondary font-normal text-lg mb-10 leading-9">
                I'm from Bogor, Indonesia and i have been interested in web
                development since 2017. I started working as a web developer at{" "}
                <span>
                  <a href="#" className="text-white">
                    BMBJ
                  </a>
                </span>{" "}
                in 2021 and
                <span>
                  {" "}
                  <a href="#" className="text-white">
                    Jurnalistika
                  </a>{" "}
                </span>
                in 2022. Apart from that, I have also built the NCTech web
                development team since 2023 and currently I looking forward to
                collaborating with you!
              </p>
              <a
                href="#"
                className="text-base text-center no-underline font-medium bg-green-600 hover:bg-green-500 py-4 px-8 rounded-md text-white lg:hidden"
              >
                Download CV
              </a>
              <div className="flex items-center gap-5 max-lg:hidden">
                <Link
                  href="/"
                  className="text-base no-underline font-medium bg-green-600 hover:bg-green-500 py-3 px-8 rounded-md text-white"
                >
                  Email Me
                </Link>
                <Link
                  href={""}
                  className="font-medium text-white text-base flex gap-3 hover:text-secondary"
                >
                  <Image
                    src={"/icon/unduh.svg"}
                    alt=""
                    width={24}
                    height={30}
                  />
                  Download CV
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 self-end text-right">
            <div className="mt-10 max-lg:hidden">
              <Image
                className="ms-auto"
                src={"/img/profile.png"}
                width={300}
                height={300}
                quality={100}
                alt="Yoga"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}