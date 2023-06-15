"use client";

import "./Divider.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Divider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="divider">
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="divider-container"
      >
        <div>
          <h1>Projects Done</h1>
          <p>20+</p>
        </div>
        <div>
          <h1>Experience</h1>
          <p>1+ Years</p>
        </div>
        <div>
          <h1>Clients Satisfaction</h1>
          <p>100%</p>
        </div>
      </div>
    </section>
  );
};

export default Divider;
