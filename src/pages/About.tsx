import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="About Lance"
        subtitle="A career defined by the disciplined pursuit of lasting institutional impact."
      />

      <SectionBlock>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-6 font-sans text-foreground/80 leading-relaxed">
            <p>
              Lance Lunceford is a strategist, public servant, and entrepreneur whose career spans governance, economic development, finance, and the performing arts. His work is unified by a single conviction: that lasting prosperity is engineered through institutions, not improvised through trends.
            </p>
            <p>
              As a political leader, Lance has served in roles that shape regional policy and economic direction. As an EDC chairman, he has driven capital allocation strategies that attract investment and strengthen community infrastructure. His approach to governance draws from both classical principles and modern systems thinking.
            </p>
            <p>
              In the private sector, Lance leads The Lunceford Group, a strategic advisory and investment firm focused on finance, startup development, and long-term enterprise building. His portfolio reflects a commitment to ventures that create real value — not speculative noise.
            </p>
            <p>
              Before entering public life and business, Lance built a career as a professional trombonist, performing at the highest levels and developing the discipline, timing, and precision that now define his leadership style.
            </p>
            <p>
              Lance operates at the rare intersection of policy, capital, and culture — bringing a depth of perspective that few public figures possess.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">Domains</h3>
              <ul className="space-y-2 font-sans text-sm text-foreground/70">
                <li>Public Policy & Governance</li>
                <li>Economic Development</li>
                <li>Finance & Investment</li>
                <li>Strategic Advisory</li>
                <li>Performing Arts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">Philosophy</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed italic">
                "Build institutions that outlast individuals. Invest in systems that compound. Lead with the weight of history and the clarity of vision."
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <Footer />
    </div>
  );
};

export default About;
