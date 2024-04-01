"use client";
import React, { useState } from "react";
import Banners from "../../components/Banners";
import { Datas, ListData } from "../../components/Data";
import { Project } from "../../components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavTop from "../../components/NavTop";
import Why from "../../components/Why";
import NavBottom from "../../components/NavBottom";
import Head from "next/head";

export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Data, SetData] = useState(ListData as Datas[]);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://yogafebriatala.com" />
        <meta
          property="og:image"
          content="https://yogafebriatala.com/img/cover-share.png"
        />
      </Head>
      <NavTop />
      <Banners />
      <Project list={Data} />
      <Why />
      <NavBottom />
    </>
  );
}
