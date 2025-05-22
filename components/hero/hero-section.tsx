import HeroTextSection from "./hero-text-section";
import HeroImage from "@/assets/hero/hero-mobile.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-start gap-4 flex-col lg:flex-row p-4 sm:p-0 relative min-h-[80vh] ">
      <Image
        src={HeroImage}
        alt="Hero Image"
        placeholder="blur"
        quality={100}
        className="lg:w-[65%] w-full h-full lg:max-h-[900px] lg:-mt-8 
        order-first lg:order-last
        lg:absolute lg:right-0 lg:top-0"
      />

      <HeroTextSection />
    </div>
  );
};

export default HeroSection;
