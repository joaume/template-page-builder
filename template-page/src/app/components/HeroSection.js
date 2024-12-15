"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section
        id="hero-section"
        className="relative h-[100vh] flex content-center justify-around">
        <div
          id="hero-container"
          className="px-40 py-40 flex flex-col ">
          <div
            id="hero-image-container"
            className=" flex flex-fit">
            <Image
              src={"/sosig.png"}
              height={500}
              width={500}
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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
              }
              #hero-image-container {
                width: 50%;
                height: 50%;
                position: relative;
              }
              #hero-text-container {
                text-align: center;
                margin-top: 20px;
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
    </div>
  );
};

export default HeroSection;
