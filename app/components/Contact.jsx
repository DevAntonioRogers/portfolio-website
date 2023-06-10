"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_syz6yoo", "template_q6z5hue", form.current, "e-tUlHJlOTz4QKTCO").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h1>
            Let's Chat. <br /> Tell me about your project.
          </h1>
          <span>Let's create something together ✨</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
