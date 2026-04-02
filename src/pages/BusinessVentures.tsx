import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Cpu, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import businessHero from "@/assets/business-hero.jpg";

const ventures = [
  {
    icon: TrendingUp,
    name: "The Lunceford Group",
    type: "Strategic Advisory & Investment",
    description:
      "The flagship enterprise — a strategic advisory and investment firm at the intersection of finance, policy, and enterprise development. Advising on capital strategy, institutional partnerships, and long-term value creation.",
    metrics: ["Capital Strategy", "Institutional Partnerships", "Value Architecture"],
  },
  {
    icon: Cpu,
    name: "Finance & Capital Markets",
    type: "Investment & Portfolio Strategy",
    description:
      "Building and managing investment portfolios, advising on capital allocation, and developing financial frameworks designed to generate sustainable, compounding returns across market cycles.",
    metrics: ["Portfolio Management", "Capital Allocation", "Risk Architecture"],
  },
  {
    icon: Zap,
    name: "Startup Ecosystem",
    type: "Venture Development",
    description:
      "Actively supporting and investing in early-stage companies that demonstrate disciplined innovation. Focus areas include fintech, civic technology, and enterprise solutions that solve real infrastructure problems.",
    metrics: ["Fintech", "Civic Tech", "Enterprise Solutions"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const BusinessVentures = () => {
  return (
    <div className="min-h-screen bg-cyber-bg">
      <Navigation />

      {/* Hero — Command Center */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${businessHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/80 to-cyber-bg/30" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(190 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-0.5 bg-cyber-glow mb-8" />
            <p className="text-xs md:text-sm tracking-widest-xl uppercase text-cyber-glow font-sans font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-glow animate-pulse" />
              Enterprise · Capital · Innovation
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight max-w-4xl">
              Business<br />
              <span className="text-cyber-glow">Ventures</span>
            </h1>
            <p className="mt-8 text-lg text-cyber-text font-sans font-light max-w-2xl leading-relaxed">
              Enterprise built on conviction, not convention. Capital deployed with strategic intent and engineered for compound impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ventures — Tech card grid */}
      <section className="cyber-section py-20 md:py-32 relative">
        {/* Persistent grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(190 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50% / 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="mb-16">
            <div className="w-16 h-0.5 bg-cyber-glow mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">Active Ventures</h2>
          </motion.div>

          <div className="space-y-6">
            {ventures.map((venture, i) => {
              const Icon = venture.icon;
              return (
                <motion.div
                  key={venture.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="cyber-card p-8 md:p-10 group hover:border-cyber-glow/40 transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 border border-cyber-glow/30 flex items-center justify-center">
                          <Icon size={18} className="text-cyber-glow" />
                        </div>
                        <span className="text-xs tracking-widest uppercase text-cyber-glow/70 font-sans font-semibold">
                          {venture.type}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white group-hover:text-cyber-glow transition-colors">
                        {venture.name}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="font-sans text-cyber-text leading-relaxed">
                        {venture.description}
                      </p>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-xs tracking-widest uppercase text-cyber-glow/50 font-sans font-semibold mb-4">
                        Focus Areas
                      </p>
                      <div className="space-y-2">
                        {venture.metrics.map((m) => (
                          <div key={m} className="flex items-center gap-2 text-sm text-cyber-text/70 font-sans">
                            <span className="w-1 h-1 bg-cyber-glow rounded-full" />
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Philosophy — Glowing panel */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "hsl(220, 60%, 3%)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(190, 100%, 50%), transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-0.5 bg-cyber-glow mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
                Investment Philosophy
              </h2>
              <p className="font-sans text-cyber-text leading-relaxed mb-6">
                Lance invests in systems, not spectacles. His approach prioritizes durable business models, institutional-grade operations, and founders who understand that real enterprise is measured in decades, not quarters.
              </p>
              <p className="font-sans text-cyber-text/60 leading-relaxed mb-10">
                Every deployment of capital follows a thesis: build infrastructure that compounds, back teams that execute with discipline, and create value that is measurable and enduring.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-cyber-glow/40 text-cyber-glow font-sans font-semibold text-sm tracking-wide hover:bg-cyber-glow/10 transition-all group"
              >
                Discuss Opportunities <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Thesis", value: "Systems Over Spectacles" },
                { label: "Horizon", value: "Decade-Scale" },
                { label: "Focus", value: "Infrastructure" },
                { label: "Standard", value: "Institutional Grade" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="cyber-card p-6 text-center"
                >
                  <p className="text-xs tracking-widest uppercase text-cyber-glow/50 font-sans font-semibold mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessVentures;
