"use client";
import Image from "next/image";
import { Datas } from "./Data";

type Props = {
  onClose: () => void;
  data: Datas;
};

export const Modal = (props: Props) => {
  const { onClose, data } = props;

  return (
    <>
      <div
        className="fixed h-screen w-screen lg:px-72 px-4 flex flex-col justify-center items-center bg-gray-500 bg-opacity-30 top-0 z-50"
        onClick={onClose}
      >
        <div
          className="bg-hitam w-full h-auto rounded-xl p-6 shadow-md"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-12 grid-cols-1 grid-flow-row gap-2 md:gap-4">
            <div className="col-span-7 max-md:hidden">
              <Image
                width={2000}
                height={500}
                alt={"logo"}
                className="object-contain rounded-lg "
                src={data.image}
              />
            </div>
            <div className="col-span-5 md:ms-4 ms-2 ">
              <div className="text-white font-semibold md:text-2xl text-lg md:mb-4 mb-2 ">
                {data.name}
              </div>
              <p className="md:text-base text-sm text-secondary">
                {data.desc1}
              </p>
              <p className="md:text-base text-sm text-secondary lg:mt-4 mt-2">
                {data.desc2}
              </p>
              <div className="text-white font-semibold md:text-2xl text-lg md:mt-4 mt-2 ">
                Tools
              </div>
              <div className="flex gap-5 mt-4 max-md:hidden">
                <Image
                  width={72}
                  height={72}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo1}
                />
                <Image
                  width={72}
                  height={72}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo2}
                />
                <Image
                  width={72}
                  height={72}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo3}
                />
              </div>
              <div className="flex gap-4 mt-2 md:hidden">
                <Image
                  width={52}
                  height={52}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo1}
                />
                <Image
                  width={52}
                  height={52}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo2}
                />
                <Image
                  width={52}
                  height={52}
                  alt="banner image"
                  className="object-contain rounded-lg "
                  src={data.logo3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
