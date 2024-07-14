import React from 'react';
import './index.css'; // Estilo CSS para o formulário de contato
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
      <h2 style={{color: 'gray'}}>ESCOLHA O MELHOR PARA VOCÊ</h2>
          <h3>Fale conosco.</h3>
          <p>
            Entre em contato com um especialista preenchendo ao lado todas as informações.
          </p>
          <p>
            Se preferir, nos envie uma mensagem por WhatsApp, e-mail ou ligue em nosso contato fixo.
          </p>
          <ul>
            <li><BiLogoGmail size={17} color='red' /> contato@martinsassociados.adv.br </li>
            <li><RiWhatsappFill size={17} color='green'/> (88) 99646-2316</li>
          </ul>
        </div>
      <div className="contact-content">
     
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="(83) 99999-9999" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Digite o número de email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="O que você precisa?" required></textarea>
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
