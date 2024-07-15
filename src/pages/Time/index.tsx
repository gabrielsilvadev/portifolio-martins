import React, {useEffect, useRef} from 'react';
import { useSpring, animated } from 'react-spring';

import {  useLocation } from 'react-router-dom';
import socios from '../../img/socios/3-socios.jpeg'
import estatua from '../../img/escritorio/escritorio-2.jpeg'
import {  useNavigate, Link } from 'react-router-dom';
import ListaAdvogados from '../../componentes/ListaAdvogados';
import './index.css';

const Time: React.FC = () => {

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 1000 },
  });

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 400, friction: 20 },
  });
  const sectionRef = useRef<HTMLDivElement>(null); // Referência para a seção
 
  useEffect(()=>{
    const scrollToTop = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
      scrollToTop()
  }, [])

  

  return (
    <div  ref={sectionRef}  style={{ display: 'flex', flexDirection: 'column' }}>
      <animated.section style={{ ...fadeIn, position: 'relative', height: '300px', display: 'flex', textAlign: 'start', color: 'white' }}>

        <div style={{ position: 'absolute',padding: '9%', width: '100%', height: '100%', backgroundColor: 'rgba(14, 57, 94, 1)', zIndex: 2 }}>
        <p style={{fontSize: 20, color: 'gray'}}>SOMOS FACILITADORES</p>
      <h1 style={{fontSize: 50}}>Nosso time<span style={{color: "#8B173B"}} >.</span></h1>
        </div>
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#FFFFFF', color: '#0E395E', padding: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div>
      <ListaAdvogados/>
      </div>
      </animated.section>
      <animated.section className="saiba-mais-section" style={fadeIn}>

<div className="container">
  <h1 style={{ fontSize: 40,margin: 0, color: '#0E395E', alignSelf: 'start' }}>
    Saiba Mais<span style={{ color: "#8B173B" }}>.</span>
  </h1>
  <div className="cards-container">

    <Link to="/quem-somos" className="card">
      <div className="image" style={{ backgroundImage: `url(${estatua})` }}>
        <animated.div className="overlay" style={springProps}>
          <p>Quem somos</p>
        </animated.div>
      </div>
    </Link>

    <Link to="/servicos" className="card">
      <div className="image" style={{ backgroundImage: `url(${socios})` }}>
        <animated.div className="overlay" style={springProps}>
          <p>Nossas áreas</p>
        </animated.div>
      </div>
    </Link>
  </div>
</div>
</animated.section>
    </div>
  );
};

export default Time
