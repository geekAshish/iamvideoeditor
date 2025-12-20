import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import reel1 from '../assets/reels/reel1.jpg';
import reel2 from '../assets/reels/reel2.jpg';
import reel3 from '../assets/reels/reel3.jpg';
import reel4 from '../assets/reels/reel4.jpeg';
import reel5 from '../assets/reels/reel5.jpeg';
import reel6 from '../assets/reels/reel6.jpeg';
import reel7 from '../assets/reels/reel7.jpeg';
import reel8 from '../assets/reels/reel8.jpeg';
import reel9 from '../assets/reels/reel9.jpeg';
import reel10 from '../assets/reels/reel10.jpeg';
import reel11 from '../assets/reels/reel11.jpeg';
import reel12 from '../assets/reels/reel12.jpeg';

interface Reel {
    thumbnail: string;
    title: string;
    url: string;
}

const reels: Reel[] = [
    { thumbnail: reel1, title: 'High-Retention Instagram Reel', url: 'https://www.instagram.com/reel/DOl23bbjYM7/?igsh=M2hqZDlwbDFycHd0' },
    { thumbnail: reel2, title: 'Cinematic Instagram Edit', url: 'https://www.instagram.com/reel/CjTcPCwoFxn/?igsh=Y2MzeWhvNGcwemp0' },
    { thumbnail: reel3, title: 'Scroll-Stopping Reel Cut', url: 'https://www.instagram.com/reel/CovAvKeINOu/?igsh=MXJ5cXh3ZWs4dzBsYg==' },
    { thumbnail: reel4, title: 'Fast-Paced Social Edit', url: 'https://www.instagram.com/reel/DKaZyNpikJf/?igsh=cDIydXdzOTN0NXBt' },
    { thumbnail: reel5, title: 'Engaging Short-Form Story', url: 'https://www.instagram.com/reel/DRvhNwejkZ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel6, title: 'Creator Growth Reel', url: 'https://www.instagram.com/reel/REEL_URL_2/' },
    { thumbnail: reel7, title: 'Hook-Driven Reel Edit', url: 'https://www.instagram.com/p/CNnGuk8h0Bc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel8, title: 'Viral-Style Instagram Reel', url: 'https://www.instagram.com/reel/DRaBUVuDSTA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel9, title: 'Brand-Focused Short Edit', url: 'https://www.instagram.com/reel/DIMXWB6havj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel10, title: 'Dynamic Reel Transition Edit', url: 'https://www.instagram.com/reel/DQZU5Jhj_Tr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel11, title: 'Attention-Grabbing Social Reel', url: 'https://www.instagram.com/reel/DRjMwdLj1R-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { thumbnail: reel12, title: 'Story-First Instagram Edit', url: 'https://www.instagram.com/reel/DHGhNQWP16h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
];

const ShortFormGrid: React.FC = () => {
    const openReel = (url: string): void => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-black px-6 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {reels.map((reel, index) => (
                    <div
                        key={index}
                        onClick={() => openReel(reel.url)}
                        className={`group relative cursor-pointer rounded-xl overflow-hidden bg-black
                        transition-transform duration-300
                        ${/* Original Stagger Effect for Desktop */ ''}
                        ${index % 2 !== 0 ? 'md:translate-y-14' : 'md:translate-y-0'}
                        
                        ${/* NEW LOGIC: Hide index 5 and above on mobile, show on md+ screens */ ''}
                        ${index >= 5 ? 'hidden md:block' : 'block'}
                        `}
                    >
                        {/* Thumbnail */}
                        <img
                            src={reel.thumbnail}
                            alt={reel.title}
                            className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Instagram Icon */}
                        <div className="absolute top-3 right-3 z-20">
                            <div className="bg-black/60 backdrop-blur p-2 rounded-full">
                                <FaInstagram className="text-white text-lg" />
                            </div>
                        </div>

                        {/* Plus Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                                +
                            </div>
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-4 left-4 text-white z-10">
                            <p className="text-sm font-semibold">{reel.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShortFormGrid;