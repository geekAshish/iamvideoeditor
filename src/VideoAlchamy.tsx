import { FaLinkedinIn } from 'react-icons/fa';
import premiore_pro from './assets/premiore_pro.png'
import after_effect from './assets/after_effect.png'
import aman_pro from "./assets/Aman Portfolio Profile.png"
import davinci from './assets/davinci.png'
import photoshop from './assets/photoshop.png'
import RotatingText from './components/RotatingText/RoatatingText';

const VideoEditorHero = () => {
  return (
    // 1. Removed 'p-8' from here so the header touches the top edge
    <div id='home' className="bg-black text-white w-full min-h-screen font-sans"> 
      
      {/* HEADER / NAVBAR */}
      {/* 2. Added sticky, top-0, z-index, background, and padding (px-8 py-8) */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-8 bg-black/90 backdrop-blur-sm mb-12 transition-all duration-300">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-gray-400 font-light">Video</span>
          <span className="text-purple-500">Alchemist</span>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest">
          <a href="#home" className="hover:text-purple-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors duration-300">Portfolio</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-5">
          <a href="https://www.linkedin.com/in/aman-verma-i30" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors duration-300">
            <FaLinkedinIn size="1.2em" />
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      {/* 3. Added 'px-8' here to maintain the original side spacing */}
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-8 pb-8">
        
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <p className="text-purple-400 font-semibold tracking-widest uppercase mb-2">
            Video Editor & Motion Designer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
          <span className='text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500'>
            PROFESSIONAL
          </span>
            <br />

            <RotatingText
              texts={['Video Editing', 'Cinematic Cuts', 'Fast-Paced Reels', 'Motion Graphics', 'Clean Transitions', 'Storytelling Edits']}
              mainClassName="overflow-hidden text-5xl rounded-lg font-serif italic"
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

          <div className="relative w-64 h-64 md:w-96 md:h-96">
          
          <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full scale-125 animate-[spin_40s_linear_infinite]"></div>
            <div className="w-full h-full rounded-full border-2 border-gray-500/50 relative z-10 bg-black group overflow-hidden">
              <img
                src={aman_pro}
                alt="Ashish Kushwaha, professional video editor"
                className="relative z-10 w-auto h-full object-cover"
              />
            </div>
          </div>


          {/* Icons */}
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