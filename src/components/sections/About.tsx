
const AboutMe = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16 font-sans text-center">
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
        Welcome To The Cinematic Realm Of Jimmy, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With
        A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into
        Extraordinary Visual Experiences.
      </p>

      {/* Services/Skills List */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg sm:text-xl font-medium">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Cash Cow Editing</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Reels Editing</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Logo Animation</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Podcast Edit</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;