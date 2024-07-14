import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs'; // Exemplo de ícone para áreas de atuação
import advogadoImage from '../../img/equipe/Rossana.jpeg'; // Exemplo de imagem do advogado
import adv2 from '../../img/equipe/Ytalo.jpeg'
import adv3 from '../../img/equipe/Marcelo.jpeg'
import adv4 from '../../img/equipe/gerlania.jpg'
import { MdOutlinePictureAsPdf } from "react-icons/md";
// Dados dos advogados
const advogados = [
  {
    nome: 'Rossana Martins',
    img: advogadoImage,
    redesSociais: [
      { nome: 'Instagram', icone: AiFillInstagram },
      { nome: 'Linkedin', icone: AiFillLinkedin }
    ],
    descricao: 'Advogada. Recebeu o certificado de Láurea acadêmica: desempenho excepcional no curso de Direito. Sócia do Martins e fundadora. Atuação exclusiva no Direito Previdenciário. Previdenciarista por vocação.',
    areasAtuacao: ['Direito Previdenciário']
  },
  {
    nome: 'Ytalo Esmeraldo',
    img: adv2,
    redesSociais: [
      { nome: 'Instagram', icone: AiFillInstagram },
      { nome: 'Linkedin', icone: AiFillLinkedin }
    ],
    descricao: 'Advogado. Sócio fundador do Martins. Pós-graduando em Advocacia Cível. Pós-graduando em Direito de Família e Sucessões. Atua em Direito civil, família, sucessões, bancário rural e estruturação de negócios.',
    areasAtuacao: ['Direito Civil', 'Direito Previdenciário', 'Bancário', 'Família', 'Consumidor']
  },
  {
    nome: 'Marcelo Bezerra',
    img: adv3,
    redesSociais: [
      { nome: 'Instagram', icone: AiFillInstagram },
      { nome: 'Linkedin', icone: AiFillLinkedin }
    ],
    descricao: 'Sócio fundador e diretor do Martins. Especialista em direito do trabalho. Atuação voltada para a estruturação e compliance de empresas.',
    areasAtuacao: ['Direito Previdenciário', 'Direito Tributário', 'Trabalhista', 'Empresarial', 'Família', 'Consumidor']
  },
  {
    nome: 'Gerlania Cordeiro',
    img: adv4,
    redesSociais: [
      { nome: 'Instagram', icone: AiFillInstagram },
      { nome: 'Linkedin', icone: AiFillLinkedin }
    ],
    descricao: 'Advogada Graduado em Direito pela Unifacisa. Com foco na expertise em leis trabalhistas e uma abordagem humanizada centrada no cliente, sua missão é garantir que seus direitos sejam respeitados e que você tenha uma jornada de trabalho justa e equitativa.',
    areasAtuacao: ['Direito Previdenciário', 'Direito Trabalhista', 'Direito Bancário']
  }
];

// Componente React
const ListaAdvogados = () => {
  const transitions = useTransition(advogados, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 400 }
  });

  return (
    <div style={{ padding: '20px' }}>
      {transitions((style, item) => (
        <animated.div key={item.nome} style={{ ...style, marginBottom: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div style={{ width: '30%', backgroundColor: '#ffffff', padding: '20px', boxSizing: 'border-box' }}>
              <img src={item.img} alt="Foto do Advogado" style={{ height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '70%', backgroundColor: '#0E395E', color: '#ffffff', padding: '20px', boxSizing: 'border-box' }}>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <ul style={{ paddingInlineStart: '20px' }}>
                {item.areasAtuacao.map((area, index) => (
                  <li key={index}><BsBriefcase /> {area}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {item.redesSociais.map((redeSocial, index) => {
                    const Icone = redeSocial.icone;
                    return (
                      <a key={index} href="#">
                        <Icone size={30} style={{ color: '#ffffff' }} />
                      </a>
                    );
                  })}
                </div>
                <button style={{ backgroundColor: '#8B173B', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Salvar<MdOutlinePictureAsPdf size={15}/>
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default ListaAdvogados;
