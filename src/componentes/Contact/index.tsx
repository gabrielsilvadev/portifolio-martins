import React from 'react';
import { ContactContainer, ContactContent, ContactInfo, ContactFormWrapper, FormGroup, Label, Input, TextArea, SubmitButton } from './styles';
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

const ContactForm = () => {
  const phoneNumber = '5588996462316'; // Número de telefone para WhatsApp

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const whatsappMessage = `Olá, meu nome é ${name}. Meu telefone é ${phone} e meu email é ${email}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <h2 style={{ color: 'gray' }}>ESCOLHA O MELHOR PARA VOCÊ</h2>
        <h3>Fale conosco.</h3>
        <p>
          Entre em contato com um especialista preenchendo ao lado todas as informações.
        </p>
        <p>
          Se preferir, nos envie uma mensagem por WhatsApp, e-mail ou ligue em nosso contato fixo.
        </p>
        <ul>
          <li>
            <BiLogoGmail size={17} color='red' />
            <a href='mailto:contato@martinsassociados.adv.br'> contato@martinsassociados.adv.br</a>
          </li>
          <li>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <RiWhatsappFill size={17} color='green' /> (88) 99646-2316
            </a>
          </li>
        </ul>
      </ContactInfo>
      <ContactContent>
        <ContactFormWrapper onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" name="name" placeholder="Seu nome" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input type="tel" id="phone" name="phone" placeholder="(83) 99999-9999" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Digite o seu email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <TextArea id="message" name="message" placeholder="O que você precisa?" required></TextArea>
          </FormGroup>
          <SubmitButton type="submit">ENVIAR VIA WHATSAPP</SubmitButton>
        </ContactFormWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactForm;
