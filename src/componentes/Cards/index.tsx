import React from 'react';
import { useSpring, animated } from 'react-spring';



export const Card = ({ title, image, description, handleNavigate,  cardData, text}: any) => {
    const [hovered, setHovered] = React.useState(false);

    const expand = useSpring({
      from: { width: '5px' },
      to: { width: hovered ? '100%' : '5px' },
      config: { duration: 200 }, // Configuração de duração uniforme para suavidade contínua
    });
  
    const fade = useSpring({
      from: { opacity: 0 },
      to: { opacity: hovered ? 1 : 0 },
      config: { duration: 200 }, // Configuração de duração uniforme para suavidade contínua
    });
  
    return (
      <div 
        style={{ 
          position: 'relative', 
          width: '300px', 
          height: '300px', 
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
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            filter: hovered ? 'brightness(0.7)' : 'brightness(1)', 
            transition: 'filter 1s ease' // Transição de filtro suavizada
          }} 
        />
        <animated.div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          height: '100%',
          backgroundColor: 'rgba(139, 23, 59, 0.7)', 
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
          <h3 style={{ margin: '0', fontSize: '24px', zIndex: 3 }}>{title}</h3>
          <animated.div style={{ ...fade, zIndex: 3 }}>
            <p style={{  fontSize: '18px', fontWeight: '500' }}>{description}</p>
            <a  onClick={()=> handleNavigate({description, title, cardData, image, text})} style={{ color: 'white', textDecoration: 'underline' }}>Saiba mais</a>
          </animated.div>
        </div>
      </div>
    );
  };
  