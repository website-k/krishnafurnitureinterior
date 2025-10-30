import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import FooterLogo from '../Image/footerlogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="items-center space-x-3 mb-6">
              <div className="from-amber-600 to-amber-800 rounded-lg flex items-center justify-left footer-logo">
                {/* <span className="text-white font-bold">KF</span> */}<img src={ FooterLogo }/>
              </div>
              {/* <h3 className="text-xl font-bold text-white">Krishna Furniture</h3> */}
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Crafting premium custom furniture with exceptional woodwork expertise. Transforming spaces with quality, precision, and timeless design.
            </p>
            <div className="flex space-x-4">
  {/* WhatsApp */}
  <a
    href="https://wa.me/917621976674" // Replace with your number
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
  >
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.52 5.78L0 24l6.43-1.51A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 17c-1.87 0-3.65-.5-5.2-1.37l-.37-.22-3.82.9.95-3.72-.24-.38A9.947 9.947 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.4-7.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.73.94-.89 1.13c-.16.19-.32.21-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.12.18 1.92 2.92 4.65 4.09.65.28 1.16.45 1.56.58.66.21 1.27.18 1.75.11.53-.08 1.7-.69 1.94-1.36.24-.66.24-1.22.17-1.36-.07-.14-.26-.22-.55-.37z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/krishnafurniture1594/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
  >
    <Instagram className="w-4 h-4" />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@Krishnafurniture_interior" // Replace with your channel
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
  >
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.998 2.998 0 0 0-2.112-2.12C19.497 3.5 12 3.5 12 3.5s-7.497 0-9.386.566a2.998 2.998 0 0 0-2.112 2.12A31.194 31.194 0 0 0 0 12a31.194 31.194 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.112 2.12c1.889.566 9.386.566 9.386.566s7.497 0 9.386-.566a2.998 2.998 0 0 0 2.112-2.12A31.194 31.194 0 0 0 24 12a31.194 31.194 0 0 0-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z"/>
    </svg>
  </a>
</div>

          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-amber-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-amber-500 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-500 transition-colors duration-300">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-amber-500 transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-500 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-sm"><a href='/services#custom-furniture-making'>Custom Furniture Making</a></li>
              <li className="text-sm"><a href='/services#home-&-office-furniture'>Home & Office Furniture</a></li>
              <li className="text-sm"><a href='/services#sofa-sets-&-beds'>Sofa Sets & Beds</a></li>
              <li className="text-sm"><a href='/services#cupboards-&-cabinets'>Interior Woodwork</a></li>
              <li className="text-sm"><a href='/services#dining-&-study-tables'>Modular Furniture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:coderkajal@gmail.com" className="text-sm hover:text-amber-500 transition-colors duration-300">
                  akashsuthar311@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm"> <a href="tel: +91 7621976674" className="text-sm hover:text-amber-500 transition-colors duration-300">
                  +91 76219 76674
                </a></span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Narol, Ahmedabad - 382405, Gujrat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Krishna Furniture. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed with excellence by <a href="mailto:coderkajal@gmail.com" className="text-amber-500 hover:text-amber-400 transition-colors duration-300">akashsuthar311@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
