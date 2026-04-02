import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import musicianHero from "@/assets/musician-hero.jpg";

const movements = [
  {
    movement: "I. Formation",
    title: "The Foundation",
    text: "Lance Lunceford is a professionally trained trombonist whose musical career laid the foundation for everything that followed. The discipline of mastering an instrument at the highest level — the thousands of hours of practice, the precision of ensemble performance, the vulnerability of solo recitals — forged a mind built for both creativity and rigor.",
  },
  {
    movement: "II. Performance",
    title: "The Stage",
    text: "Lance performed with ensembles and in settings that demanded technical excellence, emotional depth, and the ability to operate under pressure. The trombone, with its unique blend of power and subtlety, became more than an instrument — it became a metaphor for the kind of leadership Lance would later bring to governance and business.",
  },
  {
    movement: "III. Resonance",
    title: "The Legacy",
    text: "Music taught Lance that timing matters more than speed, that listening is more powerful than speaking, and that the most profound impact often comes from knowing when not to play. These principles carry directly into his approach to policy, investment, and institutional leadership.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const Musician = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(20, 30%, 8%)" }}>
      <Navigation />

      {/* Hero — Concert Hall */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${musicianHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-concert-shadow via-concert-shadow/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-0.5 bg-concert-warm mb-8" />
            <p className="text-xs md:text-sm tracking-widest-xl uppercase text-concert-warm font-sans font-semibold mb-4">
              Trombone · Performance · Discipline
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-concert-cream leading-tight tracking-tight max-w-4xl">
              The<br />
              <span className="text-concert-warm italic">Musician</span>
            </h1>
            <p className="mt-8 text-lg text-concert-cream/60 font-sans font-light max-w-2xl leading-relaxed">
              Before the boardroom, before the chamber — there was the stage. Every note a lesson in timing, precision, and the discipline that defines true leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programme — Concert program aesthetic */}
      <section className="py-6 md:py-8" style={{ background: "hsl(40, 30%, 93%)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-serif text-sm md:text-base italic text-foreground/60">Programme</p>
            <div className="flex items-center gap-8 md:gap-12">
              {["I. Formation", "II. Performance", "III. Resonance"].map((m) => (
                <span key={m} className="text-xs tracking-widest uppercase text-foreground/50 font-sans font-medium">
                  {m}
                </span>
              ))}
            </div>
            <p className="font-serif text-sm italic text-foreground/60">Trombone</p>
          </div>
        </div>
      </section>

      {/* Movements */}
      <section className="concert-section py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="space-y-0">
            {movements.map((m, i) => (
              <motion.div
                key={m.movement}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-14 md:py-20 border-t border-concert-warm/15 first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                  <div className="lg:col-span-3">
                    <p className="text-xs tracking-widest uppercase text-concert-warm/60 font-sans font-semibold mb-3">
                      {m.movement}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif font-semibold text-concert-cream italic">
                      {m.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-9">
                    <p className="font-sans text-concert-cream/65 leading-relaxed text-base md:text-lg">
                      {m.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Instrument — Warm spotlight */}
      <section className="py-20 md:py-28" style={{ background: "hsl(40, 30%, 93%)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <div className="w-16 h-0.5 bg-concert-warm mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
                The Instrument
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-widest uppercase text-concert-warm font-sans font-semibold mb-2">
                    Instrument
                  </p>
                  <p className="font-serif text-3xl text-foreground">Trombone</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-concert-warm font-sans font-semibold mb-2">
                    Discipline
                  </p>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    Classical & Contemporary Performance<br />
                    Ensemble Leadership<br />
                    Solo Recital
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="font-sans text-foreground/75 leading-relaxed text-base mb-6">
                While Lance's primary focus has shifted to public service and enterprise, the musician never left. The same ear for harmony, the same instinct for rhythm, and the same commitment to craft inform every decision he makes.
              </p>
              <p className="font-sans text-foreground/75 leading-relaxed text-base">
                The trombone demands something few instruments do: the player must find every note by feel, without keys or frets. There is no mechanism to hide behind. This trained Lance to trust preparation over improvisation, to develop an internal sense of pitch that translates directly to an internal sense of timing in leadership — knowing exactly when to advance, when to hold, and when to let silence do the work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote — Grand finale */}
      <section className="concert-section py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <div className="w-16 h-0.5 bg-concert-warm mx-auto mb-10" />
            <blockquote className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-concert-cream/85 italic">
              "The trombone demands that you breathe before you speak. That single principle has shaped every negotiation, every vote, and every investment I've ever made."
            </blockquote>
            <p className="mt-10 text-sm tracking-widest uppercase text-concert-warm font-sans">
              — Lance Lunceford
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-concert-warm/30" />
              <p className="font-serif text-sm italic text-concert-cream/40">Fin</p>
              <div className="w-8 h-px bg-concert-warm/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Musician;
