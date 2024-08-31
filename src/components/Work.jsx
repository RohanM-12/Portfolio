"use client";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <>
      <div className="flex justify-center items-center text-3xl font-mono font-bold">
        <span className="font-mono text-black font-bold"> Work.</span>
        <span className="text-orange-700">init()</span>
      </div>
      <div className="grid grid-cols-2">
        <div className=" p-5 py-10 ">
          <Image
            className="rounded-xl drop-shadow-xl hover:scale-105 transition-transform duration-300"
            src={"/chohanTravel.png"}
            width={700}
            height={700}
          />
        </div>
        <div className="py-10">
          <span className="text-xl font-bold drop-shadow-xl p-5 ">
            • ETechnie
          </span>
          <span className="text-orange-500"> - Frontend Developer intern </span>
          <div className="p-10 font-semibold">
            <span>
              • Worked on a project for a tours and travel business, developing
              an ERP software that managed the buses and driver-helper,daily
              execution data.
            </span>
            <div>
              • Increased operational efficiency by 80% through development of a
              user interface for bus allocation in a travel business ERP system
            </div>
            <div>
              • Developed features for maintaining attendance and
              functionalities to enhance the record and log management
              operations. also developed pages for generating billing details
              and invoices
            </div>
            <div>
              • Collaborated with business owner and gathered the requirements,
              drafted database table schema and user interfaces accordingly
            </div>
            <div>
              • Worked on an e-commerce website for a furniture business,
              creating the cart and product pages.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
