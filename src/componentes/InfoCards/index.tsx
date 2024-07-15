import { useEffect } from 'react';
import './index.css';
import logo from '../../img/logos/logo-martinsadv 2.png'

const InfoCard = ({ icon, title, description }: any) => {
  return (
    <div className="info-card">
    {icon ?  <div className="info-card-icon">{icon}</div> :  <img 
          src={logo} 
          alt={title} 
          className="info-card-icon"
          style={{ 
            width: '15%', 
            height: '12%', 
          }} 
        />}
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
};

const InfoCardContainer = ({ cardData }: any) => {

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.info-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card-container">
      {cardData.map((card: any, index: string) => (
        <InfoCard key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default InfoCardContainer;
