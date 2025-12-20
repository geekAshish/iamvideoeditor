import './glowingText.css';

const GlowHeadline = ({ orangeText, whiteText, className }: {orangeText: string, whiteText: string, className: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-black py-20 px-4 ${className}`}>
      {/* Container for the glowing text */}
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none text-center">
        <span className="glow-text-purple">
          {orangeText}
        </span>
        <span className="glow-text-white ml-4 lowercase italic font-light">
          {whiteText}
        </span>
      </h1>
      {/* You can add other content here if needed, matching the image layout */}
      {/* For example, the image with the text content below the headline if this is a full component */}
      {/*
      <div className="mt-16 flex flex-col md:flex-row items-stretch gap-8 max-w-7xl mx-auto">
        <div className="md:w-1/2 bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-300">Placeholder for image content 1</p>
        </div>
        <div className="md:w-1/2 bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-300">Placeholder for image content 2</p>
        </div>
      </div>
      */}
    </div>
  );
};

export default GlowHeadline;