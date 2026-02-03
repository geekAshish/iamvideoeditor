// import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { useState } from 'react';

const CallToActionAndFooterDark = () => {
  // Replace this with the Web App URL you copied in Phase 1
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXDtYKIuFec_QA_BILOPX5BUf7-kDjsHGpsth3JaqU-cpx2dSFly-SFgqmTjkthEKT/exec";

  const [formData, setFormData] = useState({
    name: '',
    contact_number: '',
    email: '',
    description: '',
    is_follow_up: 'No' // Default value
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // We use 'no-cors' mode because Google Scripts redirects, which browser security often blocks in standard CORS checks.
      // NOTE: With 'no-cors', you won't get a readable JSON response back, but the data WILL save.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus('Thanks, We will connect whit you shortly...');
      // Optional: Reset form
      setFormData({ name: '', contact_number: '', email: '', description: '', is_follow_up: 'No' });

    } catch (error) {
      console.error("Error:", error);
      setStatus('Error submitting form.');
    }
  };
  return (
    <div id='contact' className="bg-black font-sans text-white">
      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-12 max-w-4xl mx-auto">
          Drop us a line or two, we are open for creative minds and collaborations!
        </h2>

        <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-sm text-left font-medium text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          ></textarea>
        </div>

        <div className="relative inline-block">
          <div className="absolute inset-0 m-auto w-48 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <button
            type="submit"
            className="relative bg-white m-auto w-48 text-black font-semibold py-2 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-lg"
          >
            {status === 'Submitting...' ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {status && <p className="text-center text-sm mt-4 text-green-600">{status}</p>}
      </form>
    </div>

        {/* Button with subtle glowing effect */}
          {/* This div creates the blurry, colored background effect */}
        {/* <div className="relative inline-block">
          <div className="absolute inset-0 m-auto w-48 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <button className="relative bg-white  text-black font-semibold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-lg">
            Get Rareblocks
          </button>
        </div> */}
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-800 py-10 px-4 sm:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-gray-400 font-light">Mr. </span>
            <span className="text-purple-500">iEdit</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 text-gray-300 text-base font-medium">
            <a href="#" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Works</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
          </nav>

          {/* Social Media Icons */}
          {/* <div className="flex space-x-6">
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
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default CallToActionAndFooterDark;