import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import policyHero from "@/assets/policy-hero.jpg";

const roles = [
  {
    numeral: "I",
    title: "Elected Office",
    description:
      "Lance has served in public office, championing legislation focused on fiscal responsibility, infrastructure investment, and regional competitiveness. His legislative record reflects a commitment to policies that build long-term prosperity rather than short-term popularity.",
  },
  {
    numeral: "II",
    title: "EDC Chairman",
    description:
      "As chairman of the Economic Development Corporation, Lance has led efforts to attract capital, recruit industry, and develop the strategic infrastructure necessary for sustained regional growth. Under his leadership, the EDC has pursued an aggressive yet disciplined approach to economic diversification.",
  },
  {
    numeral: "III",
    title: "Policy Strategist",
    description:
      "Beyond formal roles, Lance advises on policy frameworks that bridge public institutions and private enterprise. His strategic counsel has shaped approaches to workforce development, tax policy, and public-private partnerships across the region.",
  },
];

const principles = [
  { word: "Fortitudo", meaning: "Strength through endurance, not force" },
  { word: "Prudentia", meaning: "Wisdom in counsel, precision in action" },
  { word: "Iustitia", meaning: "Justice as the foundation of governance" },
  { word: "Temperantia", meaning: "Restraint that compounds into authority" },
];

const orgs = [
  { name: "Economic Development Corporation", role: "Chairman", url: "#" },
  { name: "City Council / Local Government", role: "Elected Official", url: "#" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const PublicPolicy = () => {
  return (
    <div className="min-h-screen bg-roman-shadow">
      <Navigation />

      {/* Hero — Roman Architecture */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${policyHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roman-shadow via-roman-shadow/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-0.5 bg-roman-amber mb-8" />
            <p className="text-xs md:text-sm tracking-widest-xl uppercase text-roman-amber font-sans font-semibold mb-4">
              Governance · Policy · Institutions
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-marble leading-tight tracking-tight max-w-4xl">
              Public Policy &<br />
              <span className="text-roman-amber">Economic Development</span>
            </h1>
            <p className="mt-8 text-lg text-stone/80 font-sans font-light max-w-2xl leading-relaxed">
              Governance is the architecture of prosperity. What is built with discipline endures beyond those who built it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stoic Principles Bar */}
      <section className="marble-texture py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.word}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-xl md:text-2xl italic text-foreground/90">{p.word}</p>
                <p className="text-xs text-muted-foreground font-sans mt-2 tracking-wide">{p.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles — Stone tablets aesthetic */}
      <section className="stoic-section py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="mb-16">
            <div className="w-16 h-0.5 bg-roman-amber mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-marble">Pillars of Service</h2>
          </motion.div>

          <div className="space-y-0">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border-t border-stone/15 py-12 md:py-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
                  <div className="lg:col-span-1">
                    <span className="font-serif text-3xl md:text-4xl text-roman-amber/60 italic">
                      {role.numeral}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-marble">
                      {role.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-sans text-stone/80 leading-relaxed text-base md:text-lg">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — Etched in stone feel */}
      <section className="marble-texture py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <div className="w-16 h-0.5 bg-roman-amber mx-auto mb-10" />
            <blockquote className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-foreground/85 italic">
              "A republic is not governed by the passions of the moment, but by the institutions that outlast them."
            </blockquote>
            <p className="mt-8 text-sm tracking-widest uppercase text-roman-amber font-sans">
              — Lance Lunceford
            </p>
          </motion.div>
        </div>
      </section>

      {/* Affiliated Organizations */}
      <section className="stoic-section py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp}>
            <div className="w-16 h-0.5 bg-roman-amber mb-8" />
            <h2 className="text-3xl font-serif font-semibold text-marble mb-12">Affiliated Institutions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orgs.map((org) => (
              <motion.a
                key={org.name}
                {...fadeUp}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border border-stone/15 p-8 hover:border-roman-amber/40 transition-all duration-300"
              >
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-marble group-hover:text-roman-amber transition-colors">
                    {org.name}
                  </h4>
                  <p className="text-sm text-stone/50 font-sans mt-2">{org.role}</p>
                </div>
                <ExternalLink size={16} className="text-stone/30 group-hover:text-roman-amber transition-colors mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicPolicy;
