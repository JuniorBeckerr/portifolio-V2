import React, { useRef } from 'react';
import "./ContactForm.css";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31bg996', 'template_fgkw3yo', form.current, 'cWMn-FLDGHB64TnZe')
        .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
        }, (error) => {
          console.log(error.text);
          alert('Erro ao enviar mensagem, por favor tente novamente.');
        });
  };

  return (
      <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={3} required />
          <button type="submit">SEND</button>
        </form>
      </div>
  );
};

export default ContactForm;
