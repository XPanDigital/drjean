import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode, Key } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "direction"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  key?: Key;
}

export function FadeIn({ children, delay = 0, direction = "up", className, ...props }: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
