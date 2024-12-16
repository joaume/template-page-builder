"use client";

import React from "react";
import { useEffect, useState } from "react";
import SocialsSection from "./SocialsSection";
const Wrapper = ({ children }) => {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          justify-self: center;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px 20px;
          postiion: sticky;
        }
        .imgdiv img {
          height: 40px;
          max-width: 100px; /* Adjust the max-width as needed */
        }
        .links {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          margin-left: 20px;
        }
        .links ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .links li {
          margin: 0;
          display: inline-block;
        }
        .links a {
          text-decoration: none;
          color: black;
          font-weight: bold;
        }
        .links .active a {
          color: #0070f3;
        }
      `}</style>
    </>
  );
};

const ImgDiv = () => {
  return (
    <div className="imgdiv relative flex-fit overflow-hidden ">
      <img
        src="/sosig.png"
        alt="Logo"
        width={"100px"}
        height={"auto"}
      />
    </div>
  );
};

const DynamicLinks = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="links">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}>
            <a href={`#${section.id}`}>{section.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navigation = () => {
  const directory = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "tokenomics", name: "Tokenomics" },
  ];
  return (
    <Wrapper>
      <ImgDiv />
      <SocialsSection />
    </Wrapper>
  );
};

export default Navigation;
