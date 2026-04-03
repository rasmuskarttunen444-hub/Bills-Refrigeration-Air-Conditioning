import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-24">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter leading-none">BILL'S</span>
              <span className="text-xs font-bold tracking-widest text-brand-red uppercase">Refrigeration & Air Conditioning</span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Serving Stamford, Fairfield County, and Westchester with expert commercial refrigeration, HVAC, and kitchen equipment services for over 50 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-brand-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8">Quick Links</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ArrowRight size={14} /> Services</a></li>
              <li><a href="#emergency" className="hover:text-brand-red transition-colors flex items-center gap-2 text-brand-red"><ArrowRight size={14} /> Emergency Service</a></li>
              <li><a href="#contracts" className="hover:text-brand-red transition-colors flex items-center gap-2"><ArrowRight size={14} /> Maintenance Plans</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-8">Contact Us</h4>
            <ul className="space-y-6 font-medium text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0" size={24} />
                <span>237 West Ave<br />Stamford, CT 06902</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-red shrink-0" size={24} />
                <a href="tel:2033240030" className="text-white font-black text-xl hover:text-brand-red transition-colors">(203) 324-0030</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-red shrink-0" size={24} />
                <a href="mailto:info@billsrefrigeration.com" className="hover:text-brand-red transition-colors">info@billsrefrigeration.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-brand-red shrink-0" size={24} />
                <span>24/7 Emergency Service Available</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-xl font-black mb-8">Need Service?</h4>
            <p className="text-gray-400 mb-6 font-medium">Get a technician dispatched immediately. We're on call 24/7.</p>
            <a href="tel:2033240030" className="btn-primary w-full py-4 text-lg">
              Call (203) 324-0030
            </a>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Area</p>
              <p className="text-sm font-medium text-gray-300">Stamford, Greenwich, Darien, Norwalk, Fairfield, and Westchester County.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-sm font-bold text-gray-500">
          <p>© {currentYear} Bill's Refrigeration & Air Conditioning. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a
          href="tel:2033240030"
          className="btn-primary w-full py-4 text-xl shadow-2xl flex items-center justify-center gap-4 animate-bounce"
        >
          <Phone size={24} fill="currentColor" />
          Call Now: (203) 324-0030
        </a>
      </div>
    </footer>
  );
}
