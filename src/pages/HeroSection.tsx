const HeroSection = () => {
  return (
    <div>
      <div className="flex items-center gap-2 border-1 border w-[389px] p-1 rounded-full">
        <span className="w-3 h-3 rounded-full bg-red-800"></span>
        <p>Our exclusive beta is live.</p>
        <span style={{ color: "rgba(69, 137, 255, 1)" }}>Sign up for free</span>
      </div>
    </div>
  );
};

export default HeroSection;
