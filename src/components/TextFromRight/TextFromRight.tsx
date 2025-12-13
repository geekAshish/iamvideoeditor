import { Clapperboard } from 'lucide-react'; // Assuming you have lucide-react installed

import './Animation.css'; 

const VideoEditingIntro = () => {
  return (
    <div className="bg-black flex items-center justify-center p-4">
      <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide text-white
                       glow-text-white-subtle animate-slide-in-right opacity-0">
          VIDEO EDITING
        </h2>

        <div className="">
          <Clapperboard size={120} strokeWidth={1.5} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default VideoEditingIntro;