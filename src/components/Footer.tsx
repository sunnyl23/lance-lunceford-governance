import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Lance <span className="text-gold">Lunceford</span>
            </h3>
            <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed max-w-xs">
              Leadership at the intersection of governance, capital, and strategic vision.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-gold mb-6 font-sans font-semibold">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Public Policy & Economic Development", path: "/public-policy" },
                { label: "Business Ventures", path: "/business" },
                { label: "Musician", path: "/musician" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-primary-foreground/60 hover:text-gold transition-colors font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-gold mb-6 font-sans font-semibold">Connect</h4>
            <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed">
              For inquiries regarding policy, business, or media, please use the contact page.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 text-sm text-gold hover:text-gold-light transition-colors font-sans tracking-wide"
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8">
          <p className="text-xs text-primary-foreground/40 font-sans tracking-wide">
            © {new Date().getFullYear()} Lance Lunceford. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
