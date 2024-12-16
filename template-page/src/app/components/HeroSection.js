"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative h-[50vh] max-w-[1440px] inline">
      <div
        id="hero-container"
        className="flex flex-col">
        <div
          id="hero-image-container"
          className="flex flex-grow justify-around">
          <Image
            src={"/sosig.png"}
            layout="fit"
            width={500}
            height={500}
            alt="HERO_IMAGE"
            className="rounded-xl"
          />
        </div>
        <div id="hero-text-container">
          <div
            id="hero-title"
            className="hero-text wiggle-on-hover">
            {"Silly Sosig"}
          </div>
          <div
            id="hero-subtitle"
            className="hero-subtitle wiggle-on-hover">
            {" "}
            Unlock your silli and copy the addy!{" "}
          </div>
          <div></div>
          <div
            id="copy-text"
            className="copy-text wiggle-on-hover"
            onClick={() => {
              navigator.clipboard.writeText("This is the text to copy");
              alert("Contract address copied to clipboard");
            }}>
            {"S1LH3uUmMzVxpjB2FkamrqQ6kZKwHAT7PrNgSn6fnWW"}
          </div>
          <style jsx>{`
            #hero-section {
              background-color: #f0f0f0;
            }
            #hero-container {
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
            }
            #hero-image-container {
              width: 50%;
              height: 50%;
              position: relative;
            }
            #hero-text-container {
              flex-basis: 300px;
              text-align: center;
              margin-top: 20px;
              z-index: 10;
            }
            #hero-title {
              font-size: 3rem;
              font-weight: bold;
              color: #333;
            }
            #hero-subtitle {
              font-size: 1.5rem;
              color: #666;
            }
            .wiggle-on-hover:hover {
              animation: wiggle 0.5s ease-in-out infinite;
            }
            @keyframes wiggle {
              0%,
              100% {
                transform: rotate(-3deg);
              }
              50% {
                transform: rotate(3deg);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
