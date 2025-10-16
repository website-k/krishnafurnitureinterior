import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sofa, Building2, Bed, FileBox, Utensils, DoorOpen, PaintBucket, Wrench, Gem, Grid3X3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 'custom-furniture-making',
      icon: Sofa,
      title: 'Custom Furniture Making',
      description: 'Bespoke furniture designed and crafted to your exact specifications, bringing your unique vision to life.',
      features: ['Personalized design consultation', 'Premium wood selection', 'Handcrafted construction', 'Custom finishes and details'],
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
    },
    {
      id: 'home-&-office-furniture',
      icon: Building2,
      title: 'Home & Office Furniture',
      description: 'Professional furniture solutions for residential and commercial spaces that combine functionality with aesthetic appeal.',
      features: ['Ergonomic design', 'Space optimization', 'Durable materials', 'Contemporary styles'],
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg'
    },
    {
      id: 'sofa-sets-&-beds',
      icon: Bed,
      title: 'Sofa Sets & Beds',
      description: 'Comfortable and stylish seating and sleeping solutions crafted with premium materials and expert upholstery.',
      features: ['Custom upholstery options', 'Quality foam and springs', 'Variety of designs', 'Long-lasting comfort'],
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
    },
    {
      id: 'cupboards-&-cabinets',
      icon: FileBox,
      title: 'Cupboards & Cabinets',
      description: 'Smart storage solutions with elegant designs, maximizing space while enhancing your interior aesthetics.',
      features: ['Custom dimensions', 'Soft-close mechanisms', 'Interior organizers', 'Premium finishes'],
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg'
    },
    {
      id: 'dining-&-study-tables',
      icon: Utensils,
      title: 'Dining & Study Tables',
      description: 'Functional and beautiful tables for dining and work, designed to be the centerpiece of your rooms.',
      features: ['Various sizes available', 'Solid wood construction', 'Scratch-resistant finish', 'Modern and classic designs'],
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
    },
    {
      id: 'doors-&-windows',
      icon: DoorOpen,
      title: 'Doors & Windows',
      description: 'Premium wooden doors and window frames that enhance security, insulation, and aesthetic appeal.',
      features: ['Weather-resistant', 'Custom sizes and designs', 'Security features', 'Sound insulation'],
      image: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg'
    },
    {
      id: 'interior-woodwork',
      icon: PaintBucket,
      title: 'Interior Woodwork',
      description: 'Complete interior solutions including paneling, ceiling work, and decorative elements for stunning spaces.',
      features: ['Wall paneling', 'False ceilings', 'Decorative moldings', 'Custom installations'],
      image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg'
    },
    {
      id: 'repair-&-restoration',
      icon: Wrench,
      title: 'Repair & Restoration',
      description: 'Expert restoration services to breathe new life into your cherished furniture pieces.',
      features: ['Furniture repair', 'Refinishing services', 'Antique restoration', 'Structural reinforcement'],
      image: 'https://images.pexels.com/photos/5974396/pexels-photo-5974396.jpeg'
    },
    {
      id: 'wood-carving-&-design',
      icon: Gem,
      title: 'Wood Carving & Design',
      description: 'Intricate handcrafted carvings and artistic designs that add unique character to your furniture.',
      features: ['Traditional patterns', 'Custom motifs', 'Hand-carved details', 'Artistic excellence'],
      image: 'https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg'
    },
    {
      id: 'modular-furniture-solutions',
      icon: Grid3X3,
      title: 'Modular Furniture Solutions',
      description: 'Contemporary modular systems that offer flexibility, functionality, and modern design aesthetics.',
      features: ['Space-saving designs', 'Customizable layouts', 'Easy assembly', 'Modern aesthetics'],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive furniture and woodwork solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.id}
                className={`service-card scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl opacity-20 blur-xl"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Every project is unique. Let's discuss your specific requirements and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
