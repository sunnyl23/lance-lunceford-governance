import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";

const pillars = [
  {
    title: "Public Policy & Governance",
    description: "Shaping legislation, regional strategy, and institutional frameworks that drive long-term prosperity.",
    link: "/public-policy",
  },
  {
    title: "Economic Development & Capital",
    description: "Mobilizing investment, building financial infrastructure, and accelerating regional growth.",
    link: "/business",
  },
  {
    title: "Strategic Leadership",
    description: "Bridging the gap between vision and execution across public, private, and civic sectors.",
    link: "/about",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mx-auto mb-10" />
            <p className="text-xs md:text-sm tracking-widest-xl uppercase text-gold font-sans font-semibold mb-6">
              Governance · Capital · Strategy
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight tracking-tight">
              Building Enduring Systems<br />
              <span className="text-gold">for Regional Strength</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-primary-foreground/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Lance Lunceford operates at the intersection of public policy, economic development, and strategic enterprise — shaping outcomes that outlast election cycles.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors"
              >
                Explore His Work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <SectionBlock>
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Three Pillars of Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={pillar.link} className="group block">
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-gold font-sans font-medium tracking-wide group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      {/* Quote */}
      <SectionBlock dark>
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mx-auto mb-10" />
          <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-primary-foreground/90 italic">
            "The measure of leadership is not what you build in your tenure — it's what endures long after you leave the room."
          </blockquote>
          <p className="mt-8 text-sm tracking-widest uppercase text-gold font-sans">
            — Lance Lunceford
          </p>
        </div>
      </SectionBlock>

      <Footer />
    </div>
  );
};

export default Index;
