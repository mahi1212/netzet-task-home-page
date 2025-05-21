import HeroTextSection from "./hero-text-section";
import HeroImage from "@/assets/hero/hero-mobile.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row p-4 sm:p-0 -z-10">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="w-[120%] h-full -mt-8 order-first md:order-last"
      />

      <HeroTextSection />
    </div>
  );
};

export default HeroSection;
