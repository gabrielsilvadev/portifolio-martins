import React, {useRef, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import socios from '../../img/socios/3-socios.jpeg'
import estatua from '../../img/escritorio/liberdade.jpeg'
import InfoCard from '../../componentes/InfoCards';

import { FaRegBuilding, FaRegLightbulb, FaRegNewspaper, FaRegHandshake, FaRegClipboard } from 'react-icons/fa';
import './index.css';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const cardData = [
  {
    icon: <FaRegBuilding />,
    title: 'Sociedade de Advogados',
    description: 'Martins possui diferenciais que o tornam um escritório competitivo e inovador no mercado jurídico, apto a oferecer o que há de melhor e mais personalizado na defesa dos interesses de seus clientes.',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Responsabilidade e Transparência',
    description: 'Em nosso escritório de advocacia, primamos pela prestação de serviços com transparência e responsabilidade em cada caso que assumimos. Valorizamos a confiança depositada por nossos clientes e buscamos sempre manter um diálogo claro e honesto em todas as etapas do processo e dos procedimentos.',
  },
  {
    icon: <FaRegLightbulb />,
    title: 'Tecnologia de Ponta',
    description: 'As modernas tecnologias que nós da Martins utilizadas permitem ao cliente os melhores recursos disponíveis para o acompanhamento constante de sua demanda.',
  },
  {
    icon: <FaRegNewspaper />,
    title: 'Artigos e Publicações',
    description: 'Com uma atuação proativa, os membros do escritório contribuem, de forma contínua, com a publicação de artigos para divulgação de suas ideias.',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Atuação Estratégica e Criativa',
    description: 'Com soluções que favorecem o cliente, a partir da expertise e ampla experiência profissional, atendendo todas as necessidades jurídicas pessoais e empresariais com precisão e eficiência.',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Infraestrutura',
    description: 'Acreditamos que clientes e colaboradores contribuem na melhoria da gestão e na dinâmica do escritório. Essa forma de pensar faz com que nossos integrantes desenvolvam diferentes competências dentro da estrutura, sempre em um ambiente participativo e meritocrático.',
  },
];



const QuemSomos: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 1000 },
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
  

 

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 400, friction: 20 },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} ref={sectionRef}>
      <animated.section style={{ ...fadeIn, position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'white' }}>
        <img src={socios} alt="Background" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(14, 57, 94, 0.9)', zIndex: 2 }}></div>
        <div style={{ position: 'relative', zIndex: 3, padding: '10px' }}>
          <p style={{ fontSize: 20, color: 'gray' }}>SOBRE NÓS</p>
          <h1 style={{ fontSize: '50px' }}>Somos a sociedade de <br />advogados  <span style={{ color: '#B22222' }}>Martins</span></h1>
        </div>
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#FFFFFF', color: '#0E395E', padding: '50px', height: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: 40 }}>Nossa história<span style={{ color: "#8B173B" }} >.</span></h1>
          <p style={{ fontSize: 20 }}>
            Nos últimos anos, o Martins Advogados Associados, registrado na OAB/CE sob o nº 1.765, reformulou sua prática de contencioso para soluções rápidas e extrajudiciais, com foco em gestão de dados e qualidade técnica.
            <br /><br />
            Somos mais do que um escritório de advocacia. Como parceiro estratégico, oferecemos soluções jurídicas e de negócios inovadoras, ágeis e criativas, fortalecidas por parcerias sólidas e infraestrutura robusta.
            <br /><br />
            Executamos de forma multidisciplinar, com advocacia preventiva, consultiva e contenciosa, buscando as melhores soluções para nossos clientes em questões complexas.
            <br /><br />
            Crescemos organicamente, com equipes de alta performance e atualizadas, reunindo expertise e agilidade em todas as nossas áreas de atuação.
            <br /><br />
            Nossa sede está no Crato, CE, com capacidade para atuação nacional.
          </p>


        </div>
        <img src={socios} height={390} width={470} style={{ marginLeft: 20, marginTop: 50, borderRadius: 20 }} />
      </animated.section>

      <animated.section
        style={{
          ...fadeIn,
          backgroundColor: '#F2F2F5',
          color: 'white',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1 style={{ fontSize: 40, color: '#0E395E', alignSelf: 'start' }}>
          Nosso diferencial<span style={{ color: "#8B173B" }}>.</span>
        </h1>
        <InfoCard cardData={cardData} />
        <Button
          style={{
            backgroundColor: '#8B173B',
            borderColor: "#8B173B",
            color: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.7)'
          }}
          href="https://wa.me/5588996462316"  target="_blank" rel="noopener noreferrer"
        >
          AGENDAR UMA REUNIÃO
        </Button>
      </animated.section>
      <animated.section className="advogados-section">
        <p style={{ fontSize: 20, color: 'gray' }}>ADVOGADOS COMPROMETIDOS</p>
        <h1 style={{ fontSize: 40, color: 'white' }}>Princípios norteadores<span style={{ color: "#8B173B" }} >.</span></h1>
        <div className="container">
          <div className="content">

            <div className="grid-container">
              <div className="grid-item">
                <p>MISSÃO</p>
                <p>Apresentar soluções aos clientes com celeridade, ética e expertise.</p>
              </div>

              <div className="grid-item">
                <p>VALORES</p>
                <ul>
                  <li>Ética e transparência</li>
                  <li>Expertise e capacitação contínua</li>
                  <li>Inovação e criatividade</li>
                  <li>Posicionamento profissional e íntegro</li>
                  <li>Liderança, proatividade e coragem</li>
                  <li>Meritocracia</li>
                </ul>
              </div>

              <div className="grid-item">
                <p>VISÃO</p>
                <p>Ser o grupo jurídico moderno que apresenta soluções para empresas e famílias em âmbito nacional.</p>
              </div>
            </div>
          </div>
        </div>
      </animated.section>
      <animated.section className="saiba-mais-section" style={fadeIn}>

        <div className="container">
          <h1 style={{ fontSize: 40,margin: 0, color: '#0E395E', alignSelf: 'start' }}>
            Saiba Mais<span style={{ color: "#8B173B" }}>.</span>
          </h1>
          <div className="cards-container">

            <Link to="/servicos" className="card">
              <div className="image" style={{ backgroundImage: `url(${estatua})` }}>
                <animated.div className="overlay" style={springProps}>
                  <p>nossas áreas</p>
                </animated.div>
              </div>
            </Link>

            <Link to="/time" className="card">
              <div className="image" style={{ backgroundImage: `url(${socios})` }}>
                <animated.div className="overlay" style={springProps}>
                  <p>Nosso time</p>
                </animated.div>
              </div>
            </Link>
          </div>
        </div>
      </animated.section>
    </div>
  );
};

export default QuemSomos
