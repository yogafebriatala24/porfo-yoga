"use client";
import Image from "next/image";
import { Datas } from "./Data";
import { useState } from "react";
import { Modal } from "./Modal";
import Btn from "./Btn";
import Link from "next/link";

type Props = {
  list: Datas[];
};
export const Project = (props: Props) => {
  const { list } = props;
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState(null as Datas | null);

  const viewModal = (data: Datas) => {
    setItemModal(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Memotong array list menjadi 4 item pertama
  const limitedList = list.slice(0, 4);

  return (
    <>
      <div className="sm:container lg:pt-32 pt-10">
        <div className="lg:px-20 px-4 mx-auto" data-aos="fade-up">
          <h2 className="text-white font-bold text-4xl max-md:text-2xl">
            My Project
          </h2>
          <hr className="w-48 bg-white mt-1 md:mb-12 mb-5 mx-0" />
          {limitedList.map((datas) => {
            return (
              <div
                className="  flex flex-wrap"
                data-aos="fade-up"
                key={datas.id}
              >
                <div className="md:mb-12 mb-5">
                  <div className="rounded-md">
                    <Image
                      src={datas.image}
                      width={1200}
                      height={400}
                      loading="lazy"
                      alt={"project"}
                      className="rounded-md"
                      onClick={() => viewModal(datas)}
                    />
                    <p className="text-secondary mt-3 mb-3">{datas.title}</p>
                    <div className="flex gap-2">
                      <Link
                        href={datas.btnlink}
                        className="text-white font-normal flex gap-2 hover:text-gray-300"
                      >
                        <Image
                          src={"/icon/unduh.svg"}
                          width={16}
                          height={16}
                          alt="unduh"
                        />
                        {datas.btn1}
                      </Link>
                      <button
                        onClick={() => viewModal(datas)}
                        className="bg-green text-white flex ms-3 hover:text-gray-300"
                      >
                        <Image
                          src={"/icon/detail-ic.png"}
                          width={24}
                          height={16}
                          className="me-2 hover:text-gray-300"
                          alt="detail"
                        />
                        {datas.btn2}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Btn />
        </div>
      </div>

      {showModal && itemModal !== null && (
        <Modal onClose={closeModal} data={itemModal} />
      )}
    </>
  );
};
