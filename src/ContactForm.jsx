import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form =useRef();

    const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
    })
    .catch((error) => {
        alert("Something went wrong.");
        console.log(error);
    });
  };

    return (
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '0'}}>        
        
        <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#38bdf8' }}>
        Send Me a Message
        </h4>
        
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type ="submit">Send Message</button>
    </form>

    );
}

export default ContactForm;