"use client";

import { useRef, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  animation: string;
  delay?: string;
  threshold?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = "",
  threshold = 0.15,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("animate-hidden");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`animate-hidden ${animation} ${delay} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
