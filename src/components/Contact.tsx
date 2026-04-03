import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Need Service <span className="text-brand-red underline decoration-4 underline-offset-8">Now?</span></h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Our technicians are on call 24/7 for emergency refrigeration and HVAC repairs. We prioritize commercial clients to ensure your business stays operational.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-brand-gray p-4 rounded-xl w-fit text-brand-red">
                  <Phone size={32} fill="currentColor" />
                </div>
                <h4 className="text-xl font-black">Call Us Directly</h4>
                <a href="tel:2033240030" className="text-2xl font-black text-brand-navy hover:text-brand-red transition-colors">(203) 324-0030</a>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Available 24/7</p>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-gray p-4 rounded-xl w-fit text-brand-red">
                  <MapPin size={32} />
                </div>
                <h4 className="text-xl font-black">Our Location</h4>
                <p className="text-lg font-medium text-gray-600">237 West Ave<br />Stamford, CT 06902</p>
              </div>
            </div>

            <div className="bg-brand-navy p-8 rounded-2xl text-white shadow-xl border-l-8 border-brand-red">
              <h4 className="text-xl font-black mb-4">Commercial Maintenance Plans</h4>
              <p className="text-gray-400 mb-6 font-medium leading-relaxed">
                Prevent costly breakdowns with our customized service contracts. Priority dispatching and discounted rates for contract clients.
              </p>
              <a href="#contracts" className="btn-secondary w-full py-4 text-lg border border-white/20">
                View Maintenance Plans
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gray p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative"
          >
            <div className="absolute top-0 right-0 p-4 bg-brand-red text-white rounded-bl-2xl rounded-tr-3xl font-black text-sm uppercase tracking-widest shadow-lg">
              Priority Request
            </div>
            <h3 className="text-3xl font-black mb-8">Request Service</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Business Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-brand-red outline-none transition-colors shadow-sm" placeholder="e.g. Stamford Deli" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Contact Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-brand-red outline-none transition-colors shadow-sm" placeholder="Your Name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-brand-red outline-none transition-colors shadow-sm" placeholder="(203) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Service Type</label>
                  <select className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-brand-red outline-none transition-colors shadow-sm appearance-none">
                    <option>Refrigeration Repair</option>
                    <option>HVAC / AC Repair</option>
                    <option>Kitchen Equipment</option>
                    <option>Ice Machine Service</option>
                    <option>Maintenance Contract</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">How Urgent is This?</label>
                <div className="grid grid-cols-3 gap-4">
                  <button type="button" className="p-3 bg-white border border-gray-200 rounded-lg font-bold text-sm hover:border-brand-red transition-colors shadow-sm">Low</button>
                  <button type="button" className="p-3 bg-white border border-gray-200 rounded-lg font-bold text-sm hover:border-brand-red transition-colors shadow-sm">Medium</button>
                  <button type="button" className="p-3 bg-brand-red text-white border border-brand-red rounded-lg font-bold text-sm shadow-lg">Emergency</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Description of Issue</label>
                <textarea rows={4} className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-brand-red outline-none transition-colors shadow-sm" placeholder="Tell us what's happening..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-5 text-xl mt-4">
                Submit Priority Request
              </button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={16} className="text-brand-red" />
                Secure Form
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={16} className="text-brand-red" />
                Fast Response
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
