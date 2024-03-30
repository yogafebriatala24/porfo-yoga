import Image from "next/image";
import Link from "next/link";

export default function NavBottom() {
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 rounded-t-lg shadow-secondary shadow bg-gelap flex justify-between text-center px-4 py-3">
        <Link href={""}>
          <Image
            src={"/img/logo.png"}
            alt=""
            width={47}
            height={24}
            quality={100}
          />
        </Link>

        <Link href={""}>
          <Image
            src={"/icon/stack.svg"}
            alt=""
            width={30}
            height={24}
            quality={100}
            className="mx-auto"
          />
          <div className="text-white text-sm hover:text-secondary">Project</div>
        </Link>

        <Link href={""}>
          <Image
            src={"/icon/wa.svg"}
            alt=""
            width={30}
            height={24}
            quality={100}
            className="mx-auto"
          />
          <p className="text-white text-sm">Whatsapp</p>
        </Link>
      </div>
      <div className="w-full bg-gelap max-md:hidden py-10">
        <div className=" sm:container md:px-20">
          <div className="text-2xl text-white font-bold">Get in touch</div>
          <div className="text-sm text-secondary font-reguler pt-2">
            For business inquiry please send email to febriatala24@gmail.com
          </div>
          <div className="flex gap-10 pt-10">
            <Link href={""}>
              <Image src={"./icon/ig.svg"} alt="ig" width={40} height={40} />
            </Link>
            <Link href={""}>
              <Image
                src={"./icon/github.svg"}
                alt="ig"
                width={40}
                height={40}
              />
            </Link>
            <Link href={""}>
              <Image
                src={"./icon/linkedin.svg"}
                alt="ig"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
