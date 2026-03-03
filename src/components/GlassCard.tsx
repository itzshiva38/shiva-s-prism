import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hoverable = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("glass-card", hoverable && "glass-card-hoverable", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
