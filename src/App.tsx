import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, Clock, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />

        {/* Urgency Section */}
        <section id="emergency" className="bg-brand-red py-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-full animate-pulse">
                  <AlertTriangle size={48} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Equipment Down? We Respond Fast.</h2>
                  <p className="text-xl font-bold text-white/90">24/7 Emergency Service for Stamford Restaurants & Businesses.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a href="tel:2033240030" className="bg-white text-brand-red hover:bg-gray-100 font-black py-5 px-10 rounded-xl text-2xl shadow-2xl flex items-center justify-center gap-4 transition-all hover:scale-105">
                  <Phone size={32} fill="currentColor" />
                  (203) 324-0030
                </a>
                <a href="#contact" className="bg-brand-navy text-white hover:bg-slate-800 font-black py-5 px-10 rounded-xl text-2xl shadow-2xl flex items-center justify-center gap-4 transition-all border border-white/20">
                  Request Service
                  <ArrowRight size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* B2B Trust Section */}
        <section className="bg-brand-navy py-16 border-y border-white/10">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3 text-white font-black text-2xl tracking-tighter">
                <ShieldCheck className="text-brand-red" size={32} />
                HYDROCARBON CERTIFIED
              </div>
              <div className="flex items-center gap-3 text-white font-black text-2xl tracking-tighter">
                <ShieldCheck className="text-brand-red" size={32} />
                LICENSED & INSURED
              </div>
              <div className="flex items-center gap-3 text-white font-black text-2xl tracking-tighter">
                <ShieldCheck className="text-brand-red" size={32} />
                50+ YEARS EXPERIENCE
              </div>
              <div className="flex items-center gap-3 text-white font-black text-2xl tracking-tighter">
                <ShieldCheck className="text-brand-red" size={32} />
                FAMILY OWNED
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Maintenance Contract CTA */}
        <section id="contracts" className="section-padding bg-white relative overflow-hidden">
          <div className="container-custom">
            <div className="bg-brand-gray rounded-[3rem] p-8 md:p-20 relative overflow-hidden border border-gray-100 shadow-sm">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-1/4"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 bg-brand-navy text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} className="text-brand-red" />
                    Preventive Maintenance
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">Stop Emergencies Before They <span className="text-brand-red">Happen.</span></h2>
                  <p className="text-xl text-gray-600 font-medium leading-relaxed">
                    Our customized service contracts save you money, reduce downtime, and extend the life of your equipment. Priority dispatching included.
                  </p>
                  <ul className="space-y-4">
                    {['Priority 24/7 Dispatching', 'Discounted Labor Rates', 'Regular Equipment Inspections', 'Detailed Service Reports'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-lg font-bold text-brand-navy">
                        <CheckCircle2 size={24} className="text-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-primary text-xl py-5 px-10 inline-flex">
                    Get a Custom Quote
                    <ArrowRight size={24} />
                  </a>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                    alt="Maintenance Service"
                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-6 -right-6 bg-brand-red text-white p-8 rounded-2xl shadow-xl font-black text-center">
                    <p className="text-3xl">20%</p>
                    <p className="text-xs uppercase tracking-widest">Average Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
