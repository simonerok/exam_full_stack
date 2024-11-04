"use client";
import Button from "./Button";
import ButtonUnderscore from "./ButtonUnderscore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`transition-all duration-500 ease-in-out bg-bg_darker text-light_text py-4 px-8 flex items-center justify-between sticky top-0 z-50 ${isScrolled ? "rounded-[50px] py-2 px-4 opacity-85 m-4 top-2" : ""}`}>
        {/* Profile Image */}
        <div className="flex items-center">
          <img src="/pb_sofia2023.JPG" alt="Profile" className="w-10 h-10 rounded-full object-cover cursor-pointer" onClick={scrollToTop} />
        </div>

        {/* Desktop buttons, hide when scrolled or menu is open */}
        <div className={`hidden md:flex items-center justify-center ${isScrolled || isMenuOpen ? "hidden" : "flex"}`}>
          <a href="#projects">
            <ButtonUnderscore text="PROJECTS" />
          </a>
        </div>

        <div className={`hidden md:flex items-center ${isScrolled || isMenuOpen ? "hidden" : "flex"}`}>
          <a href="#contact">
            <Button text="CONTACT ME" isLogged={false} icon={faPaperPlane} />
          </a>
        </div>

        {/* Burger menu icon always visible on mobile */}
        <div className="md:hidden flex items-center">
          <button aria-label="Toggle menu" className="focus:outline-none" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-bg_darker opacity-95 text-light_text flex flex-col items-center justify-center z-40 space-y-8">
          <a href="#projects" onClick={handleMenuClose}>
            <ButtonUnderscore text="PROJECTS" fontSize="larger" />
          </a>
          <a href="#contact" onClick={handleMenuClose}>
            <Button text="CONTACT ME" isLogged={false} icon={faPaperPlane} fontSize="larger" />
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;
