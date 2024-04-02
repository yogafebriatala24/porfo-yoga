import Link from "next/link";

export default function Btn() {
  return (
    <>
      <div className="bg-gelap grid md:grid-cols-12 h-32 md:h-24 gap-3 md:px-5 place-content-center rounded-md">
        <div className="md:col-span-6 max-md:text-center md:text-left flex items-center justify-center md:justify-start">
          <h2 className="text-white font-bold text-xl">
            Interested in working with me?
          </h2>
        </div>
        <div className="md:col-span-6 md:flex md:justify-end md:items-center md:max-md:text-center pt-2">
          <Link
            href="mailto:febriatala24@gmail.com"
            className="ms-auto bg-green-600 border border-green-600 hover:bg-green-500 hover:border-green-500 font-medium text-white px-4 py-2 rounded-md mx-4"
          >
            Email Me
          </Link>
          <Link
            href="/"
            className="border border-white font-medium text-white hover:text-secondary px-4 py-2 rounded-md"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </>
  );
}
