import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionBlock = ({ children, className = "", dark = false }: SectionBlockProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`section-padding ${dark ? "bg-primary text-primary-foreground" : "bg-background"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionBlock;
