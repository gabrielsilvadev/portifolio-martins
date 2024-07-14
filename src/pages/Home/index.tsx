import React from 'react';
import { Button } from 'antd';
import { useSpring, animated } from 'react-spring';
import backgroundMain from "../../img/home/background-main.jpeg";
import socios from '../../img/socios/3-socios.jpeg'
import { FaWhatsapp } from "react-icons/fa";
import { Card } from '../../componentes/Cards';
import backgroundImg1 from "../../img/atuacao/Rectangle-13.png";
import backgroundImg2 from "../../img/atuacao/Rectangle-16.png";
import backgroundImg3 from "../../img/logos/logo-alt.png";
import backgroundImg4 from "../../img/atuacao/unsplash_b5oSSFUNCHI.png";
import backgroundImg5 from "../../img/atuacao/tara-clark-Gk8LG7dsHWA-unsplash.jpg";
import backgroundImg6 from "../../img/atuacao/Advogado-previdenciario-1-1024x576.jpg";
import backgroundImg7 from "../../img/atuacao/phillip-goldsberry-kwqJwtlb0KU-unsplash.jpg";
import backgroundImg8 from "../../img/atuacao/man-5806015_1280.jpg";
import backgroundImg9 from "../../img/atuacao/legal.jpg";
import escritorio from "../../img/escritorio/escritorio.jpeg";
import HorizontalScroll from '../../componentes/ScrollTime';
import ImageCarousel from '../../componentes/Carrosel';
import ContactForm from '../../componentes/Contact';
import {  useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 1000 },
  });

  const navigate = useNavigate();

  const handleNavigate = (serviceData:object) => {
    navigate('/servicos-detalhes', { state: { serviceData } });
  };
  const areas = [
    {
      title: "Direito Civil",
      image: backgroundImg1,
      description: "Atuamos em todas as áreas do Direito Civil, oferecendo soluções completas e personalizadas.",
      link: "/direito-civil",
      text: "O Direito Civil é um ramo do direito que regula as relações privadas entre os cidadãos. Ele abrange diversas áreas, como contratos, responsabilidade civil, direito de família, e direito de propriedade. A consultoria jurídica em Direito Civil oferece suporte na elaboração, revisão e execução de contratos, garantindo a segurança jurídica das partes envolvidas. Também atua na defesa e reivindicação de direitos em casos de danos materiais e morais, buscando reparação e justiça. O Direito das Obrigações, por exemplo, trata das responsabilidades e deveres das partes em um contrato. O Direito de Propriedade lida com questões de posse e propriedade de bens móveis e imóveis, assegurando os direitos do proprietário.",
      cardData: [
        {
          icon: '',
          title: 'Consultoria Jurídica',
          description: 'Oferecemos consultoria jurídica especializada em diversas áreas do Direito Civil.'
        },
        {
          icon: '',
          title: 'Contratos',
          description: 'Elaboração e revisão de contratos para garantir a segurança jurídica das partes envolvidas.'
        },
        {
          icon: '',
          title: 'Responsabilidade Civil',
          description: 'Defesa e reivindicação de direitos em casos de danos materiais e morais.'
        },
        {
          icon: '',
          title: 'Direito das Obrigações',
          description: 'Assessoria em questões relacionadas às obrigações e direitos das partes envolvidas em um contrato.'
        },
        {
          icon: '',
          title: 'Direito de Propriedade',
          description: 'Consultoria em questões relacionadas à posse e propriedade de bens móveis e imóveis.'
        },
        {
          icon: '',
          title: 'Direito de Família',
          description: 'Orientação em questões de direito de família, como divórcios, guarda de filhos e pensão alimentícia.'
        }
      ]
    },
    {
      title: "Direito Penal",
      image: backgroundImg2,
      description: "Defendemos nossos clientes em todas as esferas do Direito Penal, com ética e profissionalismo.",
      link: "/direito-penal",
      text: "O Direito Penal é o ramo do direito que define o que é crime e estabelece as penalidades correspondentes. Ele visa proteger a sociedade punindo as condutas que são consideradas nocivas. A defesa criminal é essencial para garantir que os direitos dos acusados sejam respeitados em todas as fases do processo, desde a investigação até o julgamento. A consultoria em Direito Penal também ajuda a prevenir delitos, orientando indivíduos e empresas sobre como agir dentro da legalidade. Crimes contra o patrimônio, como furto e roubo, e crimes contra a pessoa, como homicídio e lesão corporal, são exemplos de áreas de atuação no Direito Penal.",
      cardData: [
        {
          icon: '',
          title: 'Defesa Criminal',
          description: 'Atuação em todas as fases do processo penal, desde a investigação até o julgamento.'
        },
        {
          icon: '',
          title: 'Recursos e Apelações',
          description: 'Elaboração de recursos e apelações para garantir o direito de defesa do cliente.'
        },
        {
          icon: '',
          title: 'Consultoria em Direito Penal',
          description: 'Orientação jurídica para prevenção e atuação em questões criminais.'
        },
        {
          icon: '',
          title: 'Crimes Contra o Patrimônio',
          description: 'Defesa em casos de crimes como furto, roubo e estelionato.'
        },
        {
          icon: '',
          title: 'Crimes Contra a Pessoa',
          description: 'Atuação em processos envolvendo crimes como homicídio, lesão corporal e violência doméstica.'
        },
        {
          icon: '',
          title: 'Medidas Protetivas',
          description: 'Apoio e orientação em casos que necessitam de medidas protetivas, como violência doméstica.'
        }
      ]
    },
    {
      title: "Direito Trabalhista",
      image: backgroundImg4,
      description: "Promovemos equilíbrio nas relações de trabalho, com soluções legais e extrajudiciais para garantir justiça e harmonia.",
      link: "/direito-trabalhista",
      text: "O Direito Trabalhista regula as relações entre empregadores e empregados, assegurando direitos e deveres para ambas as partes. Ele cobre desde o reconhecimento de vínculos trabalhistas e direitos como horas extras e FGTS, até a resolução de conflitos por assédio e discriminação no ambiente de trabalho. A consultoria trabalhista visa garantir que as práticas de Recursos Humanos estejam em conformidade com a legislação, prevenindo litígios e promovendo um ambiente de trabalho justo e harmonioso. Negociações coletivas e acordos sindicais também são aspectos importantes do Direito Trabalhista, que busca equilibrar os interesses de empregadores e empregados.",
      cardData: [
        {
          icon: '',
          title: 'Reconhecimento de Vínculo Trabalhista',
          description: 'Reconhecimento de vínculo trabalhista, com possibilidade de recuperação de 5 anos de direitos trabalhistas não pagos.'
        },
        {
          icon: '',
          title: 'Consultoria e Assessoria Jurídica',
          description: 'Nossa consultoria trabalhista visa otimizar os serviços do RH-Recursos Humanos, orientando e sanando todas as dúvidas relacionadas à área do direito trabalhista.'
        },
        {
          icon: '',
          title: 'Assédio e Discriminação do Trabalho',
          description: 'Danos morais por assédio moral, sexual ou tratamento indigno.'
        },
        {
          icon: '',
          title: 'Artigos e Publicações',
          description: 'Com uma atuação proativa, os membros do escritório contribuem, de forma contínua, com a publicação de artigos para divulgação de suas ideias.'
        },
        {
          icon: '',
          title: 'Assinatura de Carteira',
          description: 'A assinatura da carteira de trabalho é direito essencial de todo e qualquer trabalhador, sendo obrigatória a assinatura em todos os casos.'
        },
        {
          icon: '',
          title: 'Horas Extras',
          description: 'Atuação para reconhecer direito de horas extras não devidamente pagos.'
        },
        {
          icon: '',
          title: 'FGTS',
          description: 'Garantia de que o FGTS esteja sendo corretamente depositado.'
        },
        {
          icon: '',
          title: 'Rescisão Contratual',
          description: 'Orientação e defesa em processos de rescisão contratual, assegurando os direitos do trabalhador.'
        },
        {
          icon: '',
          title: 'Negociações Coletivas',
          description: 'Assessoria em negociações coletivas e acordos sindicais.'
        },
        {
          icon: '',
          title: 'Segurança no Trabalho',
          description: 'Consultoria sobre normas de segurança no trabalho e prevenção de acidentes.'
        }
      ]
    },
    {
      title: "Direito do Consumidor",
      image: backgroundImg5,
      description: "Protegemos os direitos dos consumidores, garantindo a devida reparação e defesa de seus interesses.",
      link: "/direito-consumidor",
      text: "O Direito do Consumidor protege os direitos dos consumidores nas suas relações com fornecedores de produtos e serviços. Ele assegura que os consumidores sejam tratados com respeito e que seus direitos sejam respeitados. A defesa do consumidor envolve a resolução de conflitos, como reclamações sobre produtos defeituosos, práticas comerciais enganosas e cobranças indevidas. Ações coletivas podem ser movidas para defender um grande número de consumidores afetados pelo mesmo problema. Garantias de produtos e devoluções são aspectos cruciais do Direito do Consumidor, assegurando que os consumidores possam reclamar e obter reparação quando seus direitos são violados.",
      cardData: [
        {
          icon: '',
          title: 'Reclamações de Consumo',
          description: 'Auxílio na resolução de conflitos entre consumidores e fornecedores.'
        },
        {
          icon: '',
          title: 'Ações Coletivas',
          description: 'Representação de grupos de consumidores em ações coletivas para defesa de seus direitos.'
        },
        {
          icon: '',
          title: 'Defesa do Consumidor',
          description: 'Atuação em casos de práticas abusivas e defesa dos direitos do consumidor.'
        },
        {
          icon: '',
          title: 'Garantias e Devoluções',
          description: 'Assistência em questões de garantias de produtos e devoluções.'
        },
        {
          icon: '',
          title: 'Cobranças Indevidas',
          description: 'Defesa contra cobranças indevidas e abusivas.'
        },
        {
          icon: '',
          title: 'Cláusulas Abusivas',
          description: 'Revisão e contestação de cláusulas abusivas em contratos de consumo.'
        }
      ]
    },
    {
      title: "Direito Público",
      image: backgroundImg8,
      description: "Atuamos em questões relacionadas ao Direito Público, assessorando órgãos governamentais e entidades públicas.",
      link: "/direito-publico",
      text: "O Direito Público regula as relações entre o Estado e os cidadãos, incluindo áreas como direito constitucional, administrativo e tributário. Ele garante que o poder público atue dentro dos limites estabelecidos pela lei. Consultoria para órgãos públicos envolve assessoria em processos licitatórios, gestão de contratos administrativos e questões de improbidade administrativa. O Direito Constitucional assegura a interpretação e aplicação adequada da Constituição, protegendo os direitos fundamentais dos cidadãos. A atuação em Direito Público também inclui o acompanhamento de políticas públicas e a defesa dos interesses do Estado e da sociedade.",
      cardData: [
        {
          icon: '',
          title: 'Consultoria para Órgãos Públicos',
          description: 'Consultoria jurídica para órgãos e entidades públicas.'
        },
        {
          icon: '',
          title: 'Licitações e Contratos Administrativos',
          description: 'Assessoria em processos licitatórios e gestão de contratos administrativos.'
        },
        {
          icon: '',
          title: 'Direito Constitucional',
          description: 'Atuação em questões relacionadas à interpretação e aplicação da Constituição.'
        },
        {
          icon: '',
          title: 'Improbidade Administrativa',
          description: 'Defesa em processos de improbidade administrativa.'
        },
        {
          icon: '',
          title: 'Políticas Públicas',
          description: 'Acompanhamento e assessoria na implementação de políticas públicas.'
        },
        {
          icon: '',
          title: 'Consultoria em Direito Tributário',
          description: 'Assessoria jurídica em questões tributárias, garantindo conformidade com a legislação fiscal.'
        }
      ]
    }
  ];
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <animated.section style={{ ...fadeIn, position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'white' }}>
        <img src={backgroundMain} alt="Background" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(14, 57, 94, 0.9)', zIndex: 2 }}></div>
        <div style={{ position: 'relative', zIndex: 3, padding: '20px' }}>
          <h1 style={{ fontSize: 40 }}>Somos um <span style={{ color: '#B22222' }}>escritório<br/> de Advocacia multidisciplinar.</span></h1>
          <p style={{ fontSize: 20 }}>Com uma infraestrutura moderna, atendemos clientes de todo o Brasil</p>
          <Button style={{ backgroundColor: '#8B173B',borderColor: "#8B173B", color: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.7)'  }}>ENTRAR EM CONTATO <FaWhatsapp size={24}/></Button>
        </div>
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#FFFFFF', color: '#0E395E', padding: '35px',  height: '450px',display: 'flex' , flexDirection: 'row', justifyContent: 'space-between' }}>
      <div>
       <p style={{fontSize: 20, color: 'gray'}}>RESPONSABILIDADE E TRANSPARÊNCIA</p>
        <h1 style={{fontSize: 40}}>Quem Somos<span style={{color: "#8B173B"}} >.</span></h1>
        <p style={{fontSize: 20}}>Um escritório que combina tradição <br/> e inovação para oferecer soluções jurídicas de alto nível.<br/> Com uma fundação baseada<br/> no compromisso de prestar serviços jurídicos excepcionais, <br/>
        nosso escritório possui uma história notável <br/> de sucesso e dedicação no atendimento aos nossos clientes.</p>
        </div>
        <img src={socios} height={390} width={470} />
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#0E395E', color: 'white' }}>
     
      <img src={backgroundImg6} alt="Background" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(14, 57, 94, 0.93)', zIndex: 2 }}></div>
        <div style={{ position: 'relative', zIndex: 3, padding: '50px' }}>
        <p style={{fontSize: 20, color: 'gray'}}>PLANO ESTRATÉGICO E ESPECIALIZADO</p>
        <h1 style={{fontSize: 40}}>áreas de atuação<span style={{color: "#8B173B"}} >.</span></h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {areas.map(area => (
        <Card 
        key={area.title}
        title={area.title}
        image={area.image}
        description={area.description}
        link={area.link}
        text={area.text}
        cardData={area.cardData}
        handleNavigate={handleNavigate}
        />
      ))}
    </div>
        
        </div>

   
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#FFFFFF', color: '#0E395E', padding: '50px' }}>
      <p style={{fontSize: 20, color: 'gray'}}>RESPONSABILIDADE E TRANSPARÊNCIA</p>
      <h1 style={{fontSize: 40}}>Nosso time<span style={{color: "#8B173B"}} >.</span></h1>
      <HorizontalScroll/>
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#0E395E', color: 'white' }}>
        <img src={escritorio} alt="Background" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(14, 57, 94, 0.93)', zIndex: 2 }}></div>
        <div style={{ position: 'relative', zIndex: 3, padding: '50px' }}>
        <p style={{fontSize: 20, color: 'gray'}}>ATENDIMENTO EM TODO BRASIL</p>
      <h1 style={{fontSize: 40}}>Nosso escritório<span style={{color: "#8B173B"}} >.</span></h1>
     <ImageCarousel /> 
     </div>
    
      </animated.section>

      <animated.section style={{ ...fadeIn, backgroundColor: '#F2F2F5', color: 'white', padding: '50px' }}>
        <ContactForm/>
      </animated.section>
    </div>
  );
};

export default Home;
