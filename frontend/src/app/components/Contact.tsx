import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer id="contact" className="py-8 px-4 bg-bg_lighter flex flex-col items-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center lg:flex-row lg:justify-center lg:text-left lg:space-x-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img src="/pb_Sofia2023.JPG" alt="Sofia" className="w-40 h-40 rounded-lg object-cover" />
        </div>

        {/* Contact Details */}
        <div className="mt-6 lg:mt-0 lg:flex-grow text-center lg:text-left">
          <h3 className="text-xl font-bold mb-4">Get in touch...</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:ssimone12@gmail.com" className="hover:underline">
                ssimone12@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              <a href="https://www.linkedin.com/in/sofia-s-rokkedal" target="_blank" rel="noopener noreferrer" className="hover:underline">
                /sofia-s-rokkedal
              </a>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +45 21180916
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright Text */}
      <div className="text-center mt-8">
        <p className="text-gray-500">© Sofia Simone Rokkedal</p>
      </div>
    </footer>
  );
};

export default Contact;
