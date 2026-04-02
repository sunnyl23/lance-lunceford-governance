import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for reaching out. We will respond promptly.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="Contact"
        subtitle="For inquiries regarding policy, business, media, or speaking engagements."
      />

      <SectionBlock>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans font-semibold mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Inquiries
              </h3>
              <div className="flex items-center gap-3 text-sm text-foreground/70 font-sans">
                <Mail size={16} className="text-gold" />
                <span>contact@lancelunceford.com</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Office
              </h3>
              <div className="flex items-start gap-3 text-sm text-foreground/70 font-sans">
                <MapPin size={16} className="text-gold mt-0.5" />
                <span>The Lunceford Group<br />Available upon request</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-widest-xl uppercase text-gold font-sans font-semibold mb-4">
                Response
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                All inquiries are reviewed and responded to within 48 business hours.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <Footer />
    </div>
  );
};

export default Contact;
