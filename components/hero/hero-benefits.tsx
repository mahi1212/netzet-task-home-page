const HeroBenefits: React.FC = () => {
  // benefits of fametonic array
  const reason_of_joining = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content ",
    "Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <div className="flex flex-col items-center md:items-start justify-center gap-2 mt-6 ">
      {reason_of_joining?.map((reason, index) => (
        <div
          key={index}
          className="text-[18px] font-figtree flex items-center justify-center max-w-[90%]"
        >
          <p>✨ </p>
          <p className="ms-2">{reason}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroBenefits;
