import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#6b2a8c]">
      
      <header className="bg-white mx-4 md:mx-12 lg:mx-24 rounded-b-[30px] md:rounded-b-[40px] shadow-md transition-all duration-300 max-w-7xl xl:mx-auto">
        
        <div className="flex justify-between items-center px-6 py-3 md:px-10 lg:px-12 md:py-4">
          
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="WitchQuiz Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="font-bold text-lg md:text-xl text-black">
              WitchQuiz
            </span>
          </Link>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-black focus:outline-none hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <img 
                  src="/HiwBurger.png" 
                  alt="Menu" 
                  className="w-6 h-6 object-contain transition-transform duration-300" 
                />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-gray-600 hover:text-[#6b2a8c] font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#6b2a8c] font-medium transition">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#6b2a8c] font-medium transition">Contact</Link>
            
            <Link 
              to="/quiz" 
              className="bg-[#6b2a8c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#521f6d] shadow-sm transition"
            >
              Create
            </Link>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-gray-100">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-[#6b2a8c] transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-[#6b2a8c] transition-colors">
              About Us
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-[#6b2a8c] transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/quiz" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#6b2a8c] text-white w-full py-2.5 rounded-full font-semibold mt-2 hover:bg-[#521f6d] transition-colors text-center block"
            >
              Create
            </Link>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Navbar;