import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TokenSupplySection from "./components/TokenSupplySection";
import SocialsSection from "./components/SocialsSection";

export default function Home() {
  return (
    <>
      <div
        id="page"
        className=" flex justify-center bg-yellow-50 content-center text-center">
        <div className="inline">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <TokenSupplySection />
        </div>
      </div>
    </>
  );
}
