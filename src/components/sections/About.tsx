
const AboutMe = () => {
  return (
    <div id="about" className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16 font-sans text-center">
      {/* ABOUT ME Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 uppercase tracking-wider">
        ABOUT ME
      </h2>

      {/* Rainbow Divider (Approximation using gradient or multiple divs) */}
      <div className="flex justify-center mb-10">
        <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
        <div className="h-1 w-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-12 text-gray-300">
        I’m Aman Verma — a video editor driven by storytelling.
        I blend emotion, rhythm, and cinematic visuals to turn raw footage into engaging stories that audiences actually watch and remember.
      </p>

      {/* Services/Skills List */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg sm:text-xl font-medium">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Cash Cow YouTube Editing</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>High-Retention Reels</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Brand Logo Animation</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Clean Podcast Editing</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;