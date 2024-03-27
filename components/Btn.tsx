import Link from "next/link";

export default function Btn() {
  return (
    <>
      <div className="bg-gelap grid md:grid-cols-12 h-32 md:h-24 gap-3 md:px-5 place-content-center rounded-md">
        <div className="md:col-span-6 max-md:text-center">
          <h1 className="text-white font-bold text-xl">
            Interested working with me?
          </h1>
        </div>
        <div className="md:col-span-6 md:ms-auto max-md:text-center pt-1">
          <Link
            href="/"
            className="ms-auto bg-green-600 border border-green-600 hover:bg-green-500 hover:border-green-500 font-medium text-white px-4 py-2 rounded-md mx-4"
          >
            Email Me
          </Link>
          <Link
            href="/"
            className="border border-white font-medium text-white  hover:text-secondary px-4 py-2 rounded-md"
          >
            See More Project
          </Link>
        </div>
      </div>
    </>
  );
}
