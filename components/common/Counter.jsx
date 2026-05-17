"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Counter({ value = 0 }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {started ? (
        <CountUp start={0} end={Number(value)} duration={2} separator="," />
      ) : (
        "0"
      )}
    </span>
  );
}
