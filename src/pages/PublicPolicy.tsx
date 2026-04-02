import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";

const roles = [
  {
    title: "Elected Official",
    description:
      "Lance has served in public office, championing legislation focused on fiscal responsibility, infrastructure investment, and regional competitiveness. His legislative record reflects a commitment to policies that build long-term prosperity rather than short-term popularity.",
  },
  {
    title: "EDC Chairman",
    description:
      "As chairman of the Economic Development Corporation, Lance has led efforts to attract capital, recruit industry, and develop the strategic infrastructure necessary for sustained regional growth. Under his leadership, the EDC has pursued an aggressive yet disciplined approach to economic diversification.",
  },
  {
    title: "Policy Strategist",
    description:
      "Beyond formal roles, Lance advises on policy frameworks that bridge public institutions and private enterprise. His strategic counsel has shaped approaches to workforce development, tax policy, and public-private partnerships across the region.",
  },
];

const orgs = [
  {
    name: "Economic Development Corporation",
    role: "Chairman",
    url: "#",
  },
  {
    name: "City Council / Local Government",
    role: "Elected Official",
    url: "#",
  },
];

const PublicPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="Public Policy & Economic Development"
        subtitle="Governance is the architecture of prosperity. Lance Lunceford builds frameworks that endure."
      />

      <SectionBlock>
        <div className="space-y-16">
          {roles.map((role, i) => (
            <div key={role.title} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <span className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-serif font-semibold text-foreground mt-2">{role.title}</h3>
              </div>
              <div className="lg:col-span-3">
                <p className="font-sans text-foreground/80 leading-relaxed text-base">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock dark>
        <div className="gold-line mb-8" />
        <h2 className="text-3xl font-serif font-semibold mb-12">Affiliated Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {orgs.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-primary-foreground/10 p-6 hover:border-gold/40 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-serif text-lg text-primary-foreground group-hover:text-gold transition-colors">
                  {org.name}
                </h4>
                <p className="text-sm text-primary-foreground/50 font-sans mt-1">{org.role}</p>
              </div>
              <ExternalLink size={16} className="text-primary-foreground/30 group-hover:text-gold transition-colors mt-1" />
            </a>
          ))}
        </div>
      </SectionBlock>

      <Footer />
    </div>
  );
};

export default PublicPolicy;
