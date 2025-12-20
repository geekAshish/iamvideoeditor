import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import premiore_pro from './assets/premiore_pro.png'
import after_effect from './assets/after_effect.png'
import aman_pro from "./assets/aman_face.png"
import davinci from './assets/davinci.png'
import photoshop from './assets/photoshop.png'
import RotatingText from './components/RotatingText/RoatatingText';

const VideoEditorHero = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen p-8 font-sans">
      {/* HEADER / NAVBAR */}
      <header className="flex justify-between items-center mb-20">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-gray-400 font-light">Video</span>
          <span className="text-purple-500">Alchemist</span>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">About</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Portfolio</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Testimonials</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-5">
          {/* <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors duration-300">
            <FaFacebookF size="1.2em" />
          </a> */}
          <a href="https://www.linkedin.com/in/aman-verma-i30" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors duration-300">
            <FaLinkedinIn size="1.2em" />
          </a>
          {/* <a href="#" aria-label="YouTube" className="hover:text-purple-400 transition-colors duration-300">
            <FaYoutube size="1.2em" />
          </a> */}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <p className="text-purple-400 font-semibold tracking-widest uppercase mb-2">
            Video Editor & Motion Designer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
            PROFESSIONAL<br />

            <RotatingText
              texts={['Video Editing', 'Cinematic Cuts', 'Fast-Paced Reels', 'Motion Graphics', 'Clean Transitions', 'Storytelling Edits']}
              mainClassName="overflow-hidden rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.015}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
          <p className="text-gray-300 text-lg mb-4 max-w-xl">
            Hi, I’m <span className="text-white font-semibold">Aman Verma</span> — I create
            <span className="text-purple-400 font-semibold"> scroll-stopping video stories </span>
            that keep audiences hooked.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded transition-transform transform hover:scale-105 duration-300">
            LET'S TALK
          </button>
        </div>

        {/* Right Column: Image & Graphics */}
        <div className="relative flex justify-center items-center h-[30rem]">
          {/* <img
            src={premiore_pro}
            alt="Purple lightning effect"
            className="absolute inset-0 w-full h-full object-contain opacity-70 animate-pulse"
          /> */}

          {/* Person's Image */}
          <img
            src={aman_pro}
            alt="Jimmy Turner, professional video editor"
            className="relative z-10 w-auto h-full object-cover"
          />

          {/* Premiere Pro Icon */}
          <img
            src={after_effect}
            alt="Adobe Premiere Pro Icon"
            className="absolute z-20 w-24 h-24 top-4 right-4 md:right-14 transform -rotate-12 transition-transform hover:scale-110"
          />
          <img
            src={davinci}
            alt="Adobe Premiere Pro Icon"
            className="absolute z-20 w-24 h-24 top-50 right-4 md:right-14 transform rotate-10 transition-transform hover:scale-110"
          />
          <img
            src={photoshop}
            alt="Adobe Premiere Pro Icon"
            className="absolute z-20 w-24 h-24 top-4 left-4 hidden md:block transform -rotate-12 transition-transform hover:scale-110"
          />

          {/* After Effects Icon */}
          <img
            src={premiore_pro}
            alt="Adobe After Effects Icon"
            className="absolute z-20 w-24 h-24 bottom-24 left-0 md:left-8 transform rotate-12 transition-transform hover:scale-110"
          />
        </div>
      </main>
    </div>
  );
};

export default VideoEditorHero;