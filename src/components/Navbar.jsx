import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from '../images/logo1.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setNavOpen(false); // Close the mobile menu after clicking a navigation item
    }
  };

  const navItems = [
    { id: 1, text: 'HOME', target: 'particleRing' },
    { id: 2, text: 'EVENTS', target: 'tiltCard' },
    { id: 3, text: 'TIMELINE', target: 'timeLine' },
    { id: 4, text: 'GALLERY', target: 'mouseTrail' },
    { id: 5, text: 'TEAM', target: 'horizontalCarousel' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#211f39] sticky top-0 left-0 right-0 z-50 mx-auto px-4 py-3 md:py-0 text-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="flex justify-between items-center">
        <img className='h-16 w-auto text-xl font-bold text-[#7167e2]' src={logo1} alt="Logo" />

        <div className="md:hidden">
          <button onClick={handleNavToggle} className='cursor-pointer focus:outline-none'>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        <div className={`md:flex md:items-center md:space-x-4 md:ml-auto ${navOpen ? 'flex flex-col md:flex-row' : 'hidden'}`}>
          {navItems.map((item) => (
            <span
              key={item.id}
              className='cursor-pointer p-2 md:p-3 hover:bg-[#7167e2] rounded-lg md:rounded-xl m-1 md:m-2 duration-300 hover:text-black'
              onClick={() => scrollToSection(item.target)}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
