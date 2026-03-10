import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleUnderDevelopment = (e) => {
    e.preventDefault();
    alert("อยู่ในระหว่างการพัฒนาอยู่นะจั๊ฟอิอิ 🛠️");
  };

  const handleMobileUnderDevelopment = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      alert("อยู่ในระหว่างการพัฒนาอยู่นะจั๊ฟอิอิ 🛠️");
    }, 100);
  };

  return (
    <div className="purple-main sticky top-0 z-50">
      
      <header className="bg-white mx-4 md:mx-6 lg:mx-8 rounded-b-[50px] md:rounded-b-[100px] shadow-md transition-all duration-300 relative z-40">
        
        <div className="flex justify-between items-center px-6 py-3 md:px-10 lg:px-14 md:py-4">
          
          <Link to="/" className="logo flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="WitchQuiz Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="font-bold text-lg md:text-xl text-black">
              WitchQuiz
            </span>
          </Link>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-black focus:outline-none hover:bg-gray-50 transition-colors"
            >
              <img 
                src="/HiwBurger.svg" 
                alt="Menu" 
                className="w-6 h-6 object-contain transition-transform duration-300" 
              />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            
            <Link to="#" onClick={handleUnderDevelopment} className="nav-btn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </Link>
            
            <Link to="#" onClick={handleUnderDevelopment} className="nav-btn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Join
            </Link>
            
            <Link to="#" onClick={handleUnderDevelopment} className="nav-btn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Profile
            </Link>
            
            <Link 
              to="#" onClick={handleUnderDevelopment}
              className="flex items-center gap-1.5 bg-white text-[#8942BF] px-6 py-2 rounded-full font-bold text-[15px] transition-all duration-300 ml-2 border border-[#d2a8ec] shadow-[inset_0_0_15px_4px_rgba(137,66,191,0.4),0_2px_10px_rgba(137,66,191,0.3)] hover:shadow-[inset_0_0_20px_5px_rgba(137,66,191,0.5),0_4px_15px_rgba(137,66,191,0.4)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M12 4v16m8-8H4" />
              </svg>
              Create Your Quiz
            </Link>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-50 bg-[#6b2a8c]/85 backdrop-blur-xl flex flex-col px-8 pt-16 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link 
          to="/quiz" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2 bg-white/20 border border-white/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] text-white px-5 py-2.5 rounded-full font-bold w-max mb-8 hover:bg-white/30 transition-all backdrop-blur-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
          Create Your Quiz
        </Link>

        <div className="flex flex-col gap-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white font-bold text-[17px] hover:text-purple-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          
          <Link to="#" onClick={handleMobileUnderDevelopment} className="flex items-center gap-4 text-white font-bold text-[17px] hover:text-purple-200 transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search
          </Link>
          
          <Link to="#" onClick={handleMobileUnderDevelopment} className="flex items-center gap-4 text-white font-bold text-[17px] hover:text-purple-200 transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Join
          </Link>
          
          <Link to="#" onClick={handleMobileUnderDevelopment} className="flex items-center gap-4 text-white font-bold text-[17px] hover:text-purple-200 transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Profile
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;