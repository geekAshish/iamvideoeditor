import React from 'react';

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    quote: "Working with them was a game-changer. The final video quality was beyond our expectations, and the creative input was invaluable. Highly recommended!",
    name: 'Prakash Kumar',
    title: 'Founder & CEO, Creative Minds',
    companyLogo: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/logo-1_g1f1su.png', // Assuming light mode logo is visible on dark background
    authorImage: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/face_1_xpgllj.jpg',
  },
  {
    id: 2,
    "quote": "I didn't know our podcast audio could sound this professional. The editing was seamless and turned our raw recordings into a polished, engaging show.",
    name: 'Albert Flores',
    title: 'Senior Product Manager, Ridoria',
    companyLogo: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/logo-2_d1szg7.png', // Assuming light mode logo is visible on dark background
    authorImage: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/face-2_n2fdhf.jpg',
  },
  {
    id: 3,
    "quote": "The logo animation they created gave our brand a fresh, modern identity. It was delivered on time and perfectly captured the essence of our company.",
    name: 'Jenny Wilson',
    title: 'Head of Marketing, Incanto',
    companyLogo: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/logo-3_n2pqj2.png', // Assuming light mode logo is visible on dark background
    authorImage: 'https://res.cloudinary.com/dvz09m8qj/image/upload/v1728312560/face-3_sxt7jb.jpg',
  }
];

// --- Testimonial Card Component ---
const TestimonialCard = ({index, quote, name, title, companyLogo, authorImage }) => {
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
          className="h-8 filter brightness-150" // Adjust brightness to ensure visibility on dark background
        />
      </div>
      <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
         <img 
          src={authorImage} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover" 
        />
      </div>
    </div>
  );
};


// --- Main Testimonials Section Component ---
const Testimonials = () => {
  return (
    <section className="bg-black font-sans py-20 sm:py-28 px-4 sm:px-8">
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