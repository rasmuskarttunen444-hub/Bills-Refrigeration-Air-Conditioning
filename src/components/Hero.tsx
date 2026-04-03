import { Phone, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
          alt="Commercial Kitchen Equipment"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 px-4 py-1.5 rounded-full text-brand-red font-bold text-sm uppercase tracking-wider">
            <Clock size={16} />
            24/7 Emergency Service
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
            Commercial <span className="text-brand-red">Refrigeration</span> & HVAC Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-xl leading-relaxed">
            Serving Stamford restaurants, supermarkets, and businesses for over 50 years. We fix what others can't.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="tel:2033240030" className="btn-primary text-xl py-4 px-8">
              <Phone size={24} fill="currentColor" />
              Call (203) 324-0030
            </a>
            <a href="#contact" className="btn-secondary text-xl py-4 px-8 border border-white/20">
              Request Service
              <ArrowRight size={24} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-brand-red" size={28} />
              <div className="text-sm">
                <p className="font-bold text-white">Licensed & Insured</p>
                <p className="text-gray-400">CT License #S1-303240</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-brand-red" size={28} />
              <div className="text-sm">
                <p className="font-bold text-white">50+ Years</p>
                <p className="text-gray-400">Family Owned</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-brand-red" size={28} />
              <div className="text-sm">
                <p className="font-bold text-white">Fast Response</p>
                <p className="text-gray-400">Same-Day Service</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Trust Card / Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block bg-white p-8 rounded-xl shadow-2xl border-t-4 border-brand-red"
        >
          <h3 className="text-2xl font-black mb-2">Equipment Down?</h3>
          <p className="text-gray-600 mb-6 font-medium">Get a technician dispatched immediately. We're on call 24/7.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Business Name</label>
              <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-red outline-none transition-colors" placeholder="e.g. Stamford Deli" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number</label>
              <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-red outline-none transition-colors" placeholder="(203) 000-0000" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Service Needed</label>
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-red outline-none transition-colors">
                <option>Refrigeration Repair</option>
                <option>HVAC / AC Repair</option>
                <option>Kitchen Equipment</option>
                <option>Ice Machine Service</option>
                <option>Maintenance Contract</option>
              </select>
            </div>
            <button type="submit" className="w-full btn-primary py-4 text-lg mt-2">
              Request Emergency Service
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-4 font-medium">
            By clicking, you agree to be contacted via phone/SMS for service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
