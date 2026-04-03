import { Phone, Menu, X, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Emergency Service', href: '#emergency', highlight: true },
    { name: 'Refrigeration', href: '#refrigeration' },
    { name: 'HVAC', href: '#hvac' },
    { name: 'Kitchen Equipment', href: '#kitchen' },
    { name: 'Contracts', href: '#contracts' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-xs md:text-sm font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-brand-red" />
              24/7 Emergency Service Available
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Serving Stamford, Fairfield & Westchester Counties</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="container-custom py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-navy leading-none">
            BILL'S
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-brand-red uppercase">
            Refrigeration & Air Conditioning
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-bold uppercase tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  link.highlight ? 'text-brand-red' : 'text-brand-navy hover:text-brand-red'
                } transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="tel:2033240030"
            className="btn-primary py-2 px-4 text-sm"
          >
            <Phone size={16} fill="currentColor" />
            (203) 324-0030
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4 text-lg font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    link.highlight ? 'text-brand-red' : 'text-brand-navy'
                  } border-b border-gray-50 pb-2`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:2033240030"
                className="btn-primary mt-4"
              >
                <Phone size={20} fill="currentColor" />
                Call Now: (203) 324-0030
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
