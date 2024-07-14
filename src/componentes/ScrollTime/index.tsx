import React from 'react';
import { useSpring, animated } from 'react-spring';
import backgroundImg1 from "../../img/equipe/Rossana.jpeg";
import backgroundImg2 from "../../img/equipe/Marcelo.jpeg";
import backgroundImg3 from "../../img/equipe/Ytalo.jpeg";
import backgroundImg4 from "../../img/equipe/gerlania.jpg";

const partners = [
  { name: "Rossana Martins", title: "SÓCIA", areas: [ "Família", "Sindical"], image: backgroundImg1 },
  { name: "Marcelo Bezerra", title: "SÓCIO", areas: ["Público", "Criminal", "Cível"], image: backgroundImg2 },
  { name: "Ytalo Esmeraldo", title: "SÓCIO", areas: ["Previdenciário", "Público" ,"Inventário", "Imobiliário", "Contencioso Cível"], image: backgroundImg3 },
  { name: "Gerlania Cordeiro", title: "ASSOCIADA", areas: ["Previdenciário", "Penal", "Público" , "Cartorário"], image: backgroundImg4 },
];

const PartnerCard = ({ name, title, areas, image }: any) => {
  const [hovered, setHovered] = React.useState(false);

  const expand = useSpring({
    from: { width: '0px' },
    to: { width: hovered ? '100%' : '0px' },
    config: { duration: 0 }, // Transição rápida
  });

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: hovered ? 1 : 0 },
    config: { duration: 0 }, // Transição rápida
  });

  return (
    <div 
      style={{ 
        position: 'relative', 
        minWidth: '300px', 
        height: '400px', 
        margin: '20px', 
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)'
      }} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={image} 
        alt={name} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          filter: hovered ? 'brightness(0.7)' : 'brightness(1)', 
          transition: 'filter 0.3s ease' // Transição rápida
        }} 
      />
      <animated.div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        height: '100%', 
        backgroundColor: 'rgba(14, 57, 94, 0.8)', 
        ...expand 
      }} />
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          color: 'white', 
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
          zIndex: 2,
        }}
      >
       
        <animated.div style={{ ...fade, zIndex: 3 }}>
        <h1 style={{ margin: '0', fontSize: '30px', zIndex: 3 }}>{name}</h1>
          <p style={{ margin: '2%', fontSize: '18px',fontWeight: 'bold', zIndex: 3, color: 'gray' }}>{title}</p>
          
            {areas.map((area: string) => (
              <p style={{ margin: '0', fontSize: '16px',fontWeight: 'bold', zIndex: 3, color: '#B95766' }} key={area}>{area}</p>
            ))}
          
        </animated.div>
      </div>
    </div>
  );
};

const HorizontalScroll = () => {
  return (
    <div style={{ 
      display: 'flex', 
      overflowX: 'auto', 
      padding: '20px', 
      scrollbarWidth: 'none', 
      whiteSpace: 'nowrap', 
      margin: '0 auto', // centralizar horizontalmente
      maxWidth: '100%' // para garantir que não ultrapasse o tamanho da tela
    }}>
      {partners.map(partner => (
        <div key={partner.name} style={{ display: 'inline-block' }}>
          <PartnerCard 
            name={partner.name}
            title={partner.title}
            areas={partner.areas}
            image={partner.image}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
