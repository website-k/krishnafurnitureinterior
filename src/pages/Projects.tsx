import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Tag } from 'lucide-react';
// import LivingRoomImg from '../Image/1000345722.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  // description: string;
  // category: string;
  image: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const galleryRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Living Room Set',
      // description: 'Complete living room furniture including sofa, center table, and side tables with contemporary design',
      // category: 'Sofa Sets & Beds',
      image: '/src/Image/living room.jpg',
    },
    {
      id: 2,
      title: 'Custom Office Workstation',
      // description: 'Ergonomic office furniture with built-in storage and cable management',
      // category: 'Home & Office Furniture',
      image: '/src/Image/office.jpg',
    },
    {
      id: 3,
      title: 'Carved Entrance Door',
      // description: 'Hand-crafted bedroom set with wardrobe, bed frame, and side tables',
      // category: 'Sofa Sets & Beds',
      image: '/src/Image/door.png',
    },
    {
      id: 4,
      title: 'Sofa Sets',
      // description: 'Hand-crafted bedroom set with wardrobe, bed frame, and side tables',
      // category: 'Cupboards & Cabinets',
      image: '/src/Image/1000345716.jpg',
    },
    {
      id: 5,
      title: 'Bedroom',
      // description: 'Eight-seater dining table with matching chairs in solid wood',
      // category: 'Dining & Study Tables',
      image: '/src/Image/1000345714.jpg',
    },
    {
      id: 6,
      title: 'Carved Entrance Door',
      // description: 'Handcrafted wooden door with intricate traditional carvings',
      // category: 'Wood Carving & Design',
      image: '/src/Image/Residence.jpg',
    },
    {
      id: 7,
      title: 'Sofa Sets',
      // description: 'Premium office furniture set with desk, bookshelf, and seating',
      // category: 'Home & Office Furniture',
      image: '/src/Image/sofa.webp',
    },
    {
      id: 8,
      title: ' Cupboards with Wood Doors',
      // description: 'Modern study table with ergonomic chair and built-in storage',
      // category: 'Dining & Study Tables',
      image: '/src/Image/wardrode.jpg',
    },
    {
      id: 9,
      title: 'Hall',
      // description: 'Space-efficient wardrobe with customizable compartments',
      // category: 'Modular Furniture Solutions',
      image: '/src/Image/living.webp',
    }
  ];

  // const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: galleryRef.current,
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
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-28">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of completed projects showcasing quality craftsmanship and design excellence
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      <section ref={galleryRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                      {/* <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4" />
                          <span className="text-xs">{project.category}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs">{project.date}</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed">
            Let's create something beautiful together. Get in touch to discuss your furniture needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
