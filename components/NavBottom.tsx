import Image from "next/image";
import Link from "next/link";

export default function NavBottom() {
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 rounded-t-lg shadow-secondary shadow bg-gelap flex justify-between text-center mx-auto px-4 py-3">
        <Link href={"/about"}>
          <Image src={"/img/logo.png"} alt="logo" width={43} height={24} />
        </Link>

        <Link href={"/"}>
          <Image
            src={"/icon/stack.svg"}
            alt="stack"
            width={43}
            height={24}
            className="mx-auto"
          />
        </Link>

        <Link href={"https://wa.me/+6285693941455"}>
          <Image
            src={"/icon/wa.svg"}
            alt="wa"
            width={43}
            height={24}
            className="mx-auto"
          />
        </Link>
      </div>
      <div className="w-full bg-gelap max-md:hidden py-10">
        <div className=" sm:container md:px-20">
          <div className="text-2xl text-white font-bold">Get in touch</div>
          <div className="text-sm text-secondary font-reguler pt-2">
            For business inquiry please send email to febriatala24@gmail.com
          </div>
          <div className="flex gap-10 pt-10">
            <Link href={"https://instagram.com/yogafebriatala"}>
              <Image src={"./icon/ig.svg"} alt="ig" width={40} height={40} />
            </Link>
            <Link href={"https://github.com/yogafebriatala24"}>
              <Image
                src={"./icon/github.svg"}
                alt="github"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/yoga-febriatala/"}>
              <Image
                src={"./icon/linkedin.svg"}
                alt="linkedin"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://wa.me/+6285693941455"}>
              <Image src={"./icon/wa.svg"} alt="wa" width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
