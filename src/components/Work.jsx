"use client";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="p-5">
      {/* Header Section */}
      <div className="flex justify-center items-center text-3xl font-mono font-bold mb-10">
        <span className="font-mono text-black font-bold"> Work.</span>
        <span className="text-orange-700">init()</span>
      </div>

      {/* Work Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="rounded-xl drop-shadow-xl hover:scale-105 transition-transform duration-300"
            src={"/chohanTravel.png"}
            width={700}
            height={700}
            alt="Chohan Travel"
          />
        </div>

        {/* Text Content Section */}
        <div className="space-y-4">
          <div>
            <span className="text-xl font-bold text-gray-800">• ETechnie</span>
            <span className="text-orange-500">
              {" "}
              - Frontend Developer Intern
            </span>
          </div>
          <div className="font-semibold text-gray-700 space-y-2">
            <p>
              • Worked on a project for a tours and travel business, developing
              ERP software that managed buses, drivers, helpers, and daily
              execution data.
            </p>
            <p>
              • Increased operational efficiency by 80% through the development
              of a user interface for bus allocation in a travel business ERP
              system.
            </p>
            <p>
              • Developed features for maintaining attendance and enhanced
              record and log management operations. Also developed pages for
              generating billing details and invoices.
            </p>
            <p>
              • Collaborated with the business owner, gathered requirements,
              drafted database table schema, and designed user interfaces
              accordingly.
            </p>
            <p>
              • Worked on an e-commerce website for a furniture business,
              creating the cart and product pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
