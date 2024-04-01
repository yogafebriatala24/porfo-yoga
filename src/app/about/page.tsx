"use client";
import Image from "next/image";
import NavTop from "../../../components/NavTop";
import NavBottom from "../../../components/NavBottom";

export default function page() {
  return (
    <>
      <NavTop />
      <div
        className="sm:container text-center max-md:mb-24 mb-10"
        data-aos="fade-up"
      >
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
        <div className="md:px-20 mt-4 md:mt-10 px-4 mx-auto">
          <Image
            className="mx-auto mb-10 max-md:hidden"
            src={"/img/profile.png"}
            width={300}
            height={300}
            quality={100}
            alt="Yoga"
          />
          <h1 className="text-white text-2xl font-bold">About Me</h1>
          <p className="text-secondary font-normal mt-4">
            Hello, my name is Yoga Febriatala. I am an informatics engineering
            student specializing in website development. Besides being active in
            college, I am also active in organizations both on campus and in the
            regions. Have more interest in technological developments, also have
            good skills in leadership, communication, and public speaking.
          </p>
          <div className="flex gap-2">
            <div className="bg-gelap border border-white hover:bg-transparent rounded-md text-white font-semibold w-60 h-40 mt-10 mx-auto">
              <div className="shadow py-6">
                <Image
                  src={"/icon/ach.svg"}
                  alt="ach"
                  width={60}
                  height={30}
                  className="mx-auto"
                />
                <p className="mx-auto text-white text-lg font-medium">
                  Experience
                </p>
                <p className="mx-auto text-secondary text-sm font-normal max-md:text-xs">
                  2+ years
                </p>
              </div>
            </div>
            <div className="bg-gelap border border-white hover:bg-transparent rounded-md text-white font-semibold w-60 h-40 mt-10 mx-auto">
              <div className="shadow py-6">
                <Image
                  src={"/icon/stack.svg"}
                  alt="ach"
                  width={60}
                  height={30}
                  className="mx-auto"
                />
                <p className="mx-auto text-white text-lg font-medium">
                  Project
                </p>
                <p className="mx-auto text-secondary text-sm max-md:text-xs font-normal">
                  10+ Completed Projects
                </p>
              </div>
            </div>
          </div>
          <div className="text-white text-2xl font-bold mt-10">My Skills</div>
          <div className="flex flex-wrap gap-5 mt-4 place-content-center">
            <Image src={"/icon/html.svg"} alt="html" width={40} height={90} />
            <Image src={"/icon/css.svg"} alt="css" width={40} height={90} />
            <Image src={"/icon/js.svg"} alt="js" width={40} height={90} />
            <Image src={"/icon/ts.svg"} alt="ts" width={40} height={90} />
            <Image src={"/icon/php.svg"} alt="php" width={40} height={90} />
            <Image src={"/icon/tailwind.svg"} alt="tl" width={40} height={90} />
            <Image src={"/icon/react.svg"} alt="react" width={40} height={90} />
            <Image
              src={"/icon/bootstrap.svg"}
              alt="bs"
              width={40}
              height={90}
            />
            <Image
              src={"/icon/Laravel.svg"}
              alt="laravel"
              width={40}
              height={90}
            />
            <Image src={"/icon/node.svg"} alt="node" width={40} height={90} />
            <Image src={"/icon/next.svg"} alt="next" width={40} height={90} />
            <Image src={"/icon/figma.svg"} alt="figma" width={40} height={90} />
            <Image src={"/icon/ai.svg"} alt="ai" width={40} height={90} />
            <Image src={"/icon/ps.svg"} alt="ps" width={40} height={90} />
            <Image
              src={"/icon/github.svg"}
              alt="github"
              width={40}
              height={90}
            />
            <Image src={"/icon/git.svg"} alt="git" width={40} height={90} />
            <Image src={"/icon/redux.svg"} alt="redux" width={40} height={90} />
          </div>
        </div>
      </div>
      <NavBottom />
    </>
  );
}
