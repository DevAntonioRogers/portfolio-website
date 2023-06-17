"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_syz6yoo", "template_q6z5hue", form.current, "e-tUlHJlOTz4QKTCO")
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <div
          className="contact-text"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1>
            Let's Chat. <br /> Tell me about your project.
          </h1>
          <span>Let's create something together ✨</span>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="form-heading">
            <h1>Send me a message</h1>
            <span>🚀</span>
          </div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
