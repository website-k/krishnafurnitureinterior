import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import  Logo from '../Image/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    {
      category: 'Furniture Making',
      items: [
        'Custom Furniture Making',
        'Home & Office Furniture',
        'Sofa Sets & Beds',
        'Cupboards & Cabinets',
        'Dining & Study Tables'
      ]
    },
    {
      category: 'Woodwork & Interiors',
      items: [
        'Doors & Windows',
        'Interior Woodwork',
        'Repair & Restoration'
      ]
    },
    {
      category: 'Special Designs',
      items: [
        'Wood Carving & Design',
        'Modular Furniture Solutions'
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 from-amber-600 to-amber-800 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img src={Logo} />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-700 ${
              location.pathname === '/' ? 'text-amber-700' : 'text-gray-700'
            }`}>
              HOME
            </Link>
            <Link to="/about" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-700 ${
              location.pathname === '/about' ? 'text-amber-700' : 'text-gray-700'
            }`}>
              ABOUT
            </Link>

            <div className="relative group">
              <button className={`flex items-center space-x-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-700 ${
                location.pathname === '/services' ? 'text-amber-700' : 'text-gray-700'
              }`}>
                <span>SERVICES</span>
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-[720px] mt-2">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {services.map((serviceGroup, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wider border-b border-amber-200 pb-2">
                          {serviceGroup.category}
                        </h3>
                        <ul className="space-y-2">
                          {serviceGroup.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm text-gray-600 hover:text-amber-700 hover:translate-x-1 transform transition-all duration-300 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-8 py-4 border-t border-amber-200">
                    <Link to="/services" className="text-sm font-semibold text-amber-800 hover:text-amber-900 transition-colors duration-300">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/projects" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-700 ${
              location.pathname === '/projects' ? 'text-amber-700' : 'text-gray-700'
            }`}>
              PROJECTS
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              CONTACT US
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-gray-200 pt-6">
            <Link to="/" className="block text-gray-700 hover:text-amber-700 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-amber-700 font-medium transition-colors duration-300">
              About
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-amber-700 font-medium transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="mt-3 ml-4 space-y-4">
                  {services.map((serviceGroup, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        {serviceGroup.category}
                      </h4>
                      <ul className="space-y-1.5">
                        {serviceGroup.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-sm text-gray-600 hover:text-amber-700 block"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className="block text-gray-700 hover:text-amber-700 font-medium transition-colors duration-300">
              Projects
            </Link>
            <Link to="/contact" className="block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
