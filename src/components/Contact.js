import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4278.3141235349485!2d85.08960318741595!3d25.61757338573928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5799c76c425f%3A0x6821b344543b6e3e!2sA%20G%20COLONY%20PARK!5e0!3m2!1sen!2sin!4v1613365932752!5m2!1sen!2sin"
        width="600"
        height="450"
        frameborder="0"
        // style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>8602288504</p>

      <h4>Email</h4>
      <p>saurabhkumar350@gmail.com</p>

      <h4>Address</h4>
      <p>Patna, Bihar</p>
    </div>
  );
}

export default Contact;
