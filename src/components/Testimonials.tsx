// --- Testimonial Data ---

import client1 from '../assets/clients/client_review-1.jpg';
import client2 from '../assets/clients/client_review-2.jpg';
import client3 from '../assets/clients/client_review-3.jpg';

const testimonialsData = [
  {
    id: 1,
    quote: "The reels Aman delivered completely changed how our content performs.The pacing, transitions, and storytelling were spot-on. Our watch time and engagement improved almost immediately.",
    name: 'MAX',
    title: 'Marketing Manager',
    companyLogo: client1, 
    authorImage: client1,
  },
  {
    id: 2,
    "quote": "Aman has a strong sense of narrative, especially for long-form videos. He understands where to cut, where to pause, and how to keep viewers watching till the end.",
    name: 'Dylan Reynolds',
    title: 'Entrepreneur & Content Creator',
    companyLogo: client2,
    authorImage: client2,
  },
  {
    id: 3,
    "quote": "From the first draft to the final delivery, everything felt professional and well-planned. The final video matched our brand perfectly and was delivered right on time.",
    name: 'Chris Boustedt',
    title: 'YouTube Creator',
    companyLogo: client3,
    authorImage: client3,
  }
];

// --- Testimonial Card Component ---
const TestimonialCard = ({index, quote, name, title, companyLogo }: {index: number, quote: string, name: string, title: string, companyLogo: string, authorImage: string }) => {
  let angle = "-"
  if (index % 2 === 0) {
    angle = ""
  }
  return (
    <div className={`bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col transform ${angle}rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:shadow-xl`}>
      <p className="text-lg text-gray-200">"{quote}"</p>
      
      {/* Spacer to push the bottom content down */}
      <div className="flex-grow" />

      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
        {/* You might need a dark-mode friendly version of the logo if the current one is too light */}
        <img 
          src={companyLogo} 
          alt={`${name}'s company logo`} 
          className="h-11 rounded-full filter brightness-150" // Adjust brightness to ensure visibility on dark background
        />
      </div>
      {/* <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
         <img 
          src={authorImage} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover" 
        />
      </div> */}
    </div>
  );
};


// --- Main Testimonials Section Component ---
const Testimonials = () => {
  return (
    <section id='testimonials' className="bg-black font-sans py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">What My Clients Say</h2>
          <p className="mt-4 text-lg text-gray-300">Real stories from people who have experienced the magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, i) => (
            <TestimonialCard
            index={i}
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              companyLogo={testimonial.companyLogo}
              authorImage={testimonial.authorImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;