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
    </>
  );
}
