
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const CallToActionAndFooterDark = () => {
  return (
    <div className="bg-black font-sans text-white">
      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-12 max-w-4xl mx-auto">
          Drop us a line or two, we are open for creative minds and collaborations!
        </h2>

        {/* Button with subtle glowing effect */}
        <div className="relative inline-block">
          {/* This div creates the blurry, colored background effect */}
          <div className="absolute inset-0 m-auto w-48 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <button className="relative bg-white text-black font-semibold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-lg">
            Get Rareblocks
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-800 py-10 px-4 sm:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold text-white tracking-wider">
            / RAREBLOCKS
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 text-gray-300 text-base font-medium">
            <a href="#" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Works</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={22} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook size={22} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CallToActionAndFooterDark;