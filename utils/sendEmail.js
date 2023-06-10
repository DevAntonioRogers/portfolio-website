

import emailjs from "emailjs-com";

const sendEmail = (name, email, reason) => {
  // Enter your EmailJS service ID, template ID, and user ID
  const serviceId = "service_syz6yoo";
  const templateId = "template_q6z5hue";
  const userId = "RI_3Sbdqcp4YFGc-s6ZN3";

  // Send email using EmailJS
  emailjs.send(serviceId, templateId, {
    name: name,
    email: email,
    reason: reason,
  }, userId)
    .then((response) => {
      console.log("Email sent successfully:", response.status);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendEmail;
