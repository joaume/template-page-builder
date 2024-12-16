import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="relative h-[80vh] w-[100vw] self-center items-center justify-center bg-yellow-200 p-8 text-black font-bold">
      <div className="grid grid-cols-2 flex-wrap max-w-[1440px]">
        <div id="Title-division">
          <div
            id="text-container "
            className="font-extrabold text-black text-8xl text-center justify-center ">
            <h1>TOKEN</h1>
            <h1>OMICS</h1>
          </div>{" "}
        </div>
        <div
          id="information-conatiner"
          className="">
          <p className="text-lg mb-4">Total Supply: 1'000'000'000 Sosigs</p>
          <p className="text-lg mb-4">
            Community Allocation: 9'500'000'000 Sosigs
          </p>
          <p className="text-lg mb-4">Developer Allocation: 1'000'000 Sosigs</p>
          <p className="text-lg mb-4">
            Marketing Allocation: 499'000'000 Sosigs
          </p>
          <p className="text-lg mb-4">
            Minting Disabled | Authority Disabled | Liquidity Frozen at 80K
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
