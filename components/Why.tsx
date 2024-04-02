import Image from "next/image";

export default function Why() {
  return (
    <>
      <div className="container mx-auto mb-20 px-2 pt-14 lg:px-20">
        <h2
          className="text-white text-center font-semibold text-3xl"
          data-aos="fade-up"
        >
          Why Hire Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 justify-center">
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-secondary w-52 h-52 rounded-full flex items-center justify-center mx-auto">
              <Image
                src="/img/Communicative.png"
                width={90}
                height={90}
                alt="comm"
                loading="lazy"
              />
            </div>
            <h3 className="text-white font-bold text-xl pt-6 text-center">
              Communicative
            </h3>
            <div className="pt-3 text-secondary font-medium text-sm text-center">
              I can communicate well, to explain my ideas and work. I practiced
              all of that when joining and leading student organizations
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-secondary w-52 h-52 rounded-full flex items-center justify-center mx-auto">
              <Image
                src="/img/Collab.png"
                width={110}
                height={90}
                alt="coll"
                loading="lazy"
              />
            </div>
            <h3 className="text-white font-bold text-xl pt-6 text-center">
              Collaboration
            </h3>
            <div className="pt-3 text-secondary font-medium text-sm text-center">
              Collaboration is very important at this time, I am able to
              collaborate well with the team in executing all the tasks given
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-secondary w-52 h-52 rounded-full flex items-center justify-center mx-auto">
              <Image
                src="/img/time.png"
                width={90}
                height={90}
                alt="time"
                loading="lazy"
              />
            </div>
            <h3 className="text-white font-bold text-xl pt-6 text-center">
              On Time
            </h3>
            <div className="pt-3 text-secondary font-medium text-sm text-center">
              I am able to work regularly, professionally, and on time to
              complete all tasks assigned to me
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
