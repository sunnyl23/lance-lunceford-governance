import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";

const ventures = [
  {
    name: "The Lunceford Group",
    type: "Strategic Advisory & Investment",
    description:
      "The Lunceford Group is Lance's flagship enterprise — a strategic advisory and investment firm that works at the intersection of finance, policy, and enterprise development. The firm advises on capital strategy, institutional partnerships, and long-term value creation for both public and private sector clients.",
  },
  {
    name: "Finance & Capital Markets",
    type: "Investment & Portfolio Strategy",
    description:
      "Lance's background in finance underpins his strategic worldview. He has built and managed investment portfolios, advised on capital allocation, and developed financial frameworks designed to generate sustainable, compounding returns.",
  },
  {
    name: "Startup Ecosystem",
    type: "Venture Development",
    description:
      "Lance actively supports and invests in early-stage companies that demonstrate disciplined innovation. His focus areas include fintech, civic technology, and enterprise solutions that solve real infrastructure problems — not vanity metrics.",
  },
];

const BusinessVentures = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="Business Ventures"
        subtitle="Enterprise built on conviction, not convention. Capital deployed with strategic intent."
      />

      <SectionBlock>
        <div className="space-y-20">
          {ventures.map((venture, i) => (
            <div key={venture.name}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                <div>
                  <span className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold">
                    {venture.type}
                  </span>
                  <h3 className="text-3xl font-serif font-semibold text-foreground mt-3">
                    {venture.name}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-sans text-foreground/80 leading-relaxed text-base">
                    {venture.description}
                  </p>
                </div>
              </div>
              {i < ventures.length - 1 && (
                <div className="border-b border-border mt-16" />
              )}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock dark>
        <div className="max-w-2xl">
          <div className="gold-line mb-8" />
          <h2 className="text-3xl font-serif font-semibold mb-6">Investment Philosophy</h2>
          <p className="font-sans text-primary-foreground/70 leading-relaxed mb-8">
            Lance invests in systems, not spectacles. His approach prioritizes durable business models, institutional-grade operations, and founders who understand that real enterprise is measured in decades, not quarters.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-gold font-sans font-medium text-sm tracking-wide hover:gap-3 transition-all"
          >
            Discuss Opportunities <ArrowRight size={14} />
          </a>
        </div>
      </SectionBlock>

      <Footer />
    </div>
  );
};

export default BusinessVentures;
