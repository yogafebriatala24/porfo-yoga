import Image from "next/image";

export default function Why() {
  return (
    <>
      <div className="sm:container mb-24 px-4">
        <div className="lg:px-20 pt-14  ">
          <p
            className="text-white text-center font-semibold text-3xl"
            data-aos="fade-up"
          >
            Why Hire Me?
          </p>
          <div className="grid md:grid-cols-12 pt-10 gap-10">
            <div className="col-span-4" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-secondary w-52 h-52 rounded-full flex items-center mx-20 justify-center">
                <Image
                  src={"/img/Communicative.png"}
                  width={90}
                  height={90}
                  alt="comm"
                />
              </div>
              <div className="flex text-white font-bold text-xl pt-6 justify-center items-center">
                Communicative
              </div>

              <div className="flex pt-3 text-secondary font-medium text-sm text-center justify-center items-center">
                I can communicate well, to explain my ideas and work. I
                practiced all of that when joining and leading student
                organizations
              </div>
            </div>
            <div className="col-span-4" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-secondary w-52 h-52 rounded-full flex items-center mx-20 justify-center">
                <Image
                  src={"/img/Collab.png"}
                  width={110}
                  height={90}
                  alt="comm"
                />
              </div>
              <div className="flex text-white font-bold text-xl pt-6 justify-center items-center">
                Collaboration
              </div>

              <div className="flex pt-3 text-secondary font-medium text-sm text-center justify-center items-center">
                Collaboration is very important at this time, I am able to
                collaborate well with the team in executing all the tasks given
              </div>
            </div>
            <div className="col-span-4" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-secondary w-52 h-52 rounded-full flex items-center mx-20 justify-center">
                <Image
                  src={"/img/time.png"}
                  width={90}
                  height={90}
                  alt="comm"
                />
              </div>
              <div className="flex text-white font-bold text-xl pt-6 justify-center items-center">
                On Time
              </div>

              <div className="flex pt-3 text-secondary font-medium text-sm text-center justify-center items-center">
                I am able to work regularly, professionally, and on time to
                complete all tasks assigned to me
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
