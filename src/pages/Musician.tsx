import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";

const Musician = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="The Musician"
        subtitle="Before the boardroom, before the chamber — there was the stage."
      />

      <SectionBlock>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-6 font-sans text-foreground/80 leading-relaxed">
            <p>
              Lance Lunceford is a professionally trained trombonist whose musical career laid the foundation for everything that followed. The discipline of mastering an instrument at the highest level — the thousands of hours of practice, the precision of ensemble performance, the vulnerability of solo recitals — forged a mind built for both creativity and rigor.
            </p>
            <p>
              Lance performed with ensembles and in settings that demanded technical excellence, emotional depth, and the ability to operate under pressure. The trombone, with its unique blend of power and subtlety, became more than an instrument — it became a metaphor for the kind of leadership Lance would later bring to governance and business.
            </p>
            <p>
              Music taught Lance that timing matters more than speed, that listening is more powerful than speaking, and that the most profound impact often comes from knowing when <em>not</em> to play. These principles carry directly into his approach to policy, investment, and institutional leadership.
            </p>
            <p>
              While Lance's primary focus has shifted to public service and enterprise, the musician never left. The same ear for harmony, the same instinct for rhythm, and the same commitment to craft inform every decision he makes.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Instrument
              </h3>
              <p className="font-serif text-2xl text-foreground">Trombone</p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Discipline
              </h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                Classical & Contemporary Performance, Ensemble Leadership, Solo Recital
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Legacy
              </h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed italic">
                "Every great leader I've studied understood rhythm — the rhythm of markets, of legislation, of people. Music is where I learned to hear it."
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock dark>
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mx-auto mb-10" />
          <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-primary-foreground/90 italic">
            "The trombone demands that you breathe before you speak. That single principle has shaped every negotiation, every vote, and every investment I've ever made."
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

export default Musician;
