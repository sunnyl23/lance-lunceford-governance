import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="page-header">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-primary-foreground/70 font-sans font-light max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
