import GetStartedButton from "./get-started-button";
import HeroBenefits from "./hero-benefits";
import TermsCondition from "./terms-condition";

const HeroTextSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start h-full w-full md:mt-[60px] z-10 pb-4 text-white">
      {/* headlines */}
      <div className="w-full flex flex-col font-urbanist text-[25px] md:text-[35px] font-[800] md:font-[700] text-center md:text-left
       leading-[40px] tracking-wide">
        <h1 className="lg:w-[45%] w-full ">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h2 
          className="text-[#00E7F9] lg:w-[45%]"
          style={{
            filter: "drop-shadow(0px 4px 4px #FC004E)",
          }}
        >
          Discover your way to success with Fametonic:
        </h2>
      </div>

      {/* benefits of fametonic*/}
      <HeroBenefits />
      <div className="flex flex-col md:flex-col-reverse font-urbanist">
        {/*  term and conditions */}
        <TermsCondition />
        {/* get started button */}
        <GetStartedButton />
      </div>
    </div>
  );
};

export default HeroTextSection;
