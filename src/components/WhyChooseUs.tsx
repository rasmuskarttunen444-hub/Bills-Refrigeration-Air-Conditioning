import { CheckCircle2, Clock, ShieldCheck, Award, MessageSquare, Star, PhoneCall, PenTool, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: '50+ Years Experience',
    description: 'Family-owned and operated since 1970. We have the deep technical knowledge that only comes from decades in the field.',
    icon: Award
  },
  {
    title: '24/7 Emergency Service',
    description: 'When your refrigeration goes down, you lose money. We respond fast, day or night, to get you back in business.',
    icon: Clock
  },
  {
    title: 'Commercial Specialists',
    description: 'We aren’t just HVAC guys. We are specialized commercial refrigeration and kitchen equipment experts.',
    icon: ShieldCheck
  },
  {
    title: 'Fast Response Times',
    description: 'We prioritize emergency calls and commercial clients to ensure minimal downtime for your business.',
    icon: CheckCircle2
  }
];

const steps = [
  {
    title: 'Call or Request Service',
    description: 'Contact us via phone or our online form. Our dispatchers are ready to help.',
    icon: PhoneCall
  },
  {
    title: 'Technician Dispatched',
    description: 'A highly skilled, licensed technician is sent to your location immediately.',
    icon: PenTool
  },
  {
    title: 'Diagnose & Fix',
    description: 'We identify the problem and provide a reliable, long-term solution on the spot.',
    icon: CheckCircle
  }
];

const testimonials = [
  {
    name: 'John D.',
    role: 'Restaurant Owner',
    text: '“Showed up exactly when promised. Our walk-in was down on a Friday night, and Bill’s saved us thousands in lost inventory. Fast and reliable service.”',
    rating: 5
  },
  {
    name: 'Sarah M.',
    role: 'Grocery Store Manager',
    text: '“We’ve used Bill’s for our refrigeration maintenance for years. They are the only company in Stamford we trust with our complex systems.”',
    rating: 5
  },
  {
    name: 'Mike R.',
    role: 'Facility Manager',
    text: '“Professional, knowledgeable, and honest. They fixed an HVAC issue that two other companies couldn’t figure out. Highly recommend.”',
    rating: 5
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-gray section-padding overflow-hidden">
      <div className="container-custom">
        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Why Stamford Businesses Trust <span className="text-brand-red">Bill's</span></h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              We aren't just another HVAC company. We are a multi-generation, family-owned business built on reliability and specialized expertise.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="space-y-3">
                  <div className="bg-white p-3 rounded-lg w-fit shadow-sm text-brand-red">
                    <reason.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black">{reason.title}</h4>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-red rounded-3xl rotate-3 scale-105 opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
              alt="Technician at work"
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-l-4 border-brand-red">
              <p className="text-4xl font-black text-brand-navy mb-1">50+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years in Business</p>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 font-medium">Fast, reliable service in three simple steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mb-32 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"
            >
              <div className="bg-brand-navy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg border-4 border-white">
                {index + 1}
              </div>
              <h4 className="text-xl font-black mb-4">{step.title}</h4>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-brand-navy rounded-3xl p-12 md:p-16 text-white">
          <div className="flex items-center gap-4 mb-12">
            <MessageSquare size={48} className="text-brand-red" />
            <h2 className="text-3xl md:text-4xl font-black">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d93025" className="text-brand-red" />
                  ))}
                </div>
                <p className="text-lg font-medium italic mb-6 leading-relaxed text-gray-300">{t.text}</p>
                <div>
                  <p className="font-black text-white">{t.name}</p>
                  <p className="text-sm font-bold text-brand-red uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
