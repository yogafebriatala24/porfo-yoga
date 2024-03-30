"use client";
import Image from "next/image";
import Link from "next/link";
import NavTop from "../../../components/NavTop";

export default function page() {
  return (
    <>
      <NavTop />
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
        <div className="flex flex-wrap md:px-20" data-aos="fade-up">
          <div className="md:w-1/2 w-full px-2">
            <div className="flex gap-3">ff</div>
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
