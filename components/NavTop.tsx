import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import page from "../src/app/page";
import { usePathname } from "next/navigation";

export default function NavTop() {
  const pathname = usePathname();
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <>
      <div
        className={
          header ? "fixed z-50 bg-gelap w-full top-0" : "bg-transparent"
        }
      >
        <div className="sm:container pt-5 max-md:hidden py-4">
          <div className="flex items-center gap-10">
            <Link
              href={"/"}
              className={`${
                pathname === "/"
                  ? "active flex gap-3 items-center"
                  : "flex gap-3 items-center"
              }`}
            >
              <Image src={"/img/logo.png"} width={42} height={40} alt="logo" />
              <p className="text-white font-semibold text-sm">yogafebriatala</p>
            </Link>

            <Link
              href={"/about"}
              className={`${
                pathname === "/about"
                  ? "active ms-auto text-green-600 font-normal text-lg"
                  : "ms-auto text-white font-normal text-lg"
              }`}
            >
              About
            </Link>
            <Link href={"/"} className=" text-white font-normal text-lg">
              Project
            </Link>
            <Link href={"/"} className=" text-white font-normal text-lg">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
