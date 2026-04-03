import { Snowflake, Wind, ChefHat, IceCream, Settings, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Commercial Refrigeration',
    description: 'Our core specialty. From walk-in coolers to reach-in freezers, we handle complex systems most HVAC companies won’t.',
    icon: Snowflake,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
    features: ['Walk-in Coolers & Freezers', 'Reach-in Units', 'Prep Tables', 'Hydrocarbon Certified']
  },
  {
    title: 'Commercial HVAC Systems',
    description: 'Keep your business comfortable and your equipment running. We specialize in rooftop units and complex HVAC systems.',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000',
    features: ['Rooftop Units (RTU)', 'Split Systems', 'Boiler Repair', 'Ductless Mini-Splits']
  },
  {
    title: 'Commercial Kitchen Equipment',
    description: 'From ovens to fryers, we keep your kitchen operational. We understand the urgency of a busy restaurant.',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000',
    features: ['Ovens & Ranges', 'Fryers & Grills', 'Steam Equipment', 'Dishwashers']
  },
  {
    title: 'Ice Machine Service',
    description: 'Don’t let a broken ice machine slow down your service. We repair and maintain all major brands.',
    icon: IceCream,
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=1000',
    features: ['Manitowoc', 'Hoshizaki', 'Scotsman', 'Ice-O-Matic']
  }
];

const industries = [
  'Restaurants & Bars',
  'Supermarkets & Delis',
  'Convenience Stores',
  'Commercial Kitchens',
  'Hotels & Hospitality',
  'Healthcare Facilities'
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Expert Solutions for <span className="text-brand-red underline decoration-4 underline-offset-8">Mission-Critical</span> Equipment</h2>
          <p className="text-xl text-gray-600 font-medium">We specialize in the complex systems that keep your business running. Fast response, expert diagnosis, and reliable repair.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-gray rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-red p-3 rounded-lg text-white shadow-lg">
                  <service.icon size={28} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                      <ShieldCheck size={16} className="text-brand-red shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-red font-black uppercase tracking-wider text-sm hover:gap-4 transition-all">
                  Get Service Now
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-brand-navy rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-8">Industries We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {industries.map((industry) => (
                <div key={industry} className="bg-white/10 border border-white/20 px-6 py-3 rounded-full font-bold text-lg hover:bg-brand-red hover:border-brand-red transition-colors cursor-default">
                  {industry}
                </div>
              ))}
            </div>
            <p className="mt-12 text-gray-400 font-medium max-w-2xl mx-auto">
              Trusted by hundreds of businesses across Stamford, Fairfield County, and Westchester for over 50 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
