import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-header', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional furniture craftsmanship that transforms living and working spaces into beautiful, functional environments.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted name in custom furniture, known for quality, innovation, and customer satisfaction across the region.'
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We are passionate about woodworking artistry, creating pieces that tell stories and become cherished parts of your life.'
    }
  ];

  const strengths = [
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Over 15 years of experience in premium furniture making and interior woodwork.'
    },
    {
      icon: Users,
      title: 'Skilled Team',
      description: 'Dedicated professionals committed to excellence in every project we undertake.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Combining traditional techniques with modern design trends and technologies.'
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      <section ref={headerRef} className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-header text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Krishna Furniture Interior</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Krishna Furniture Interior creates custom furniture and interiors that combine style, comfort, and durability, perfectly tailored to your space and lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
                  alt="Our Workshop"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Crafting Excellence Since 1990</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Krishna Furniture began with a simple vision: to create beautiful, lasting furniture that enhances the spaces where people live and work. Over the years, we've grown from a small workshop into a trusted name in custom furniture manufacturing.
                </p>
                <p>
                  Our journey has been driven by an unwavering commitment to quality craftsmanship, attention to detail, and customer satisfaction. Every piece we create reflects our dedication to excellence and our passion for woodworking artistry.
                </p>
                <p>
                  Today, we serve residential and commercial clients across the region, offering everything from custom furniture design to complete interior woodwork solutions. Our team of skilled craftsmen brings decades of combined experience to every project.
                </p>
                <p>
                  We believe that furniture is more than just functional objects—they are investments that should stand the test of time, both in quality and design. That's why we use only premium materials and time-tested construction techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, idx) => (
              <div key={idx} className="value-card text-center">
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <strength.icon className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-4xl font-bold mb-6">Our Process</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Consultation</h3>
                      <p className="text-amber-100">We discuss your vision, requirements, and budget to understand your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Design</h3>
                      <p className="text-amber-100">Our team creates detailed designs and provides material recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Crafting</h3>
                      <p className="text-amber-100">Skilled craftsmen bring the design to life with precision and care.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Installation</h3>
                      <p className="text-amber-100">We ensure perfect installation and your complete satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-full">
                <img
                  src="https://images.pexels.com/photos/5974396/pexels-photo-5974396.jpeg"
                  alt="Craftsmanship Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
