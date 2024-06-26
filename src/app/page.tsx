"use client";
import React, { Suspense, useState } from "react";
import Banners from "../../components/Banners";
import { Datas, ListData } from "../../components/Data";
import { Project } from "../../components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavTop from "../../components/NavTop";
import Why from "../../components/Why";
import NavBottom from "../../components/NavBottom";
import Loading from "./feed/loading";

export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Data, SetData] = useState(ListData as Datas[]);

  return (
    <>
      <NavTop />
      <Suspense fallback={<Loading />}>
        <Banners />
        <Project list={Data} />
        <Why />
        <NavBottom />
      </Suspense>
    </>
  );
}
