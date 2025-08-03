import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/logoo.png';

const socialIcons = [
  {
    icon: <FaWhatsapp />,
    href: 'https://wa.me/your-number',
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    icon: <FaInstagram />,
    href: 'https://instagram.com/your-handle',
    hoverColor: 'hover:text-[#E1306C]',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://facebook.com/your-page',
    hoverColor: 'hover:text-[#1877F2]',
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com/your-handle',
    hoverColor: 'hover:text-sky-500',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b1e3d] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={logo} alt="Fourmax Logo" className="h-16 w-auto" />
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Fourmax Pharmaceuticals. All rights reserved.
          </p>
        </div>

        {/* Social Icons with Hover Effects */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-lg">Connect With Us</h3>
          <div className="flex space-x-5">
            {socialIcons.map(({ icon, href, hoverColor }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition duration-300 ease-in-out transform hover:scale-125 ${hoverColor}
                bg-white/10 backdrop-blur-md rounded-full p-3 shadow-md hover:shadow-xl hover:backdrop-blur-xl hover:bg-white/20`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <div className="flex items-start space-x-2 text-sm">
            <FaMapMarkerAlt className="mt-1 text-blue-400" />
            <address className="not-italic text-center md:text-right">
              9-B 1st Floor, Sidco Nagar,<br />
              Villivakkam, Chennai - 600049,<br />
              Tamil Nadu, India
            </address>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaPhoneAlt className="text-blue-400" />
            <a href="tel:+917695943457" className="hover:underline">
              +91 76959 43457
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:fourmaxpharma@gmail.com" className="hover:underline">
              fourmaxpharma@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
