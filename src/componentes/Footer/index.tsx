import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import './index.css'; // Estilo CSS para o footer
import logo from '../../img/logos/logo-martinsadv.png'
import map from '../../img/logos/map.jpeg'
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-logo">
          <img src={logo} alt="Martins" />
          <p className="footer-tagline">O sucesso é a dança harmoniosa entre a persistência e a paixão, transformando obstáculos em degraus para o triunfo.</p>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <span className="footer-heading">Conteúdo</span>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Página Inicial</a></li>
              <li><a href="/quem-somos" className="footer-link">Quem Somos</a></li>
              <li><a href="/servicos" className="footer-link">Áreas de Atuação</a></li>
              <li><a href="/time" className="footer-link">Nosso Time</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <span className="footer-heading">Redes Sociais</span>
            <ul className="footer-social-links">
              <li><a href="#"><AiFillFacebook className="footer-icon" /></a></li>
              <li><a href="#"><AiOutlineTwitter className="footer-icon" /></a></li>
              <li><a href="https://www.instagram.com/martinsadvassociados_/"><AiFillInstagram className="footer-icon" /></a></li>
              <li><a href="#"><AiFillLinkedin className="footer-icon" /></a></li>
              <li><a href="#"><AiFillYoutube className="footer-icon" /></a></li>
            </ul>
          </div>
          <div className="footer-section">
            <span className="footer-heading">Contato</span>
            <ul className="footer-contact-links">
              <li><a href="mailto:contato@martinsassociados.adv.br"><HiOutlineMail className="footer-icon" /> <span>contato@martinsassociados.adv.br</span></a></li>
              <li><a href="tel:882141-8230"><HiOutlinePhone className="footer-icon" /> <span>
              (88) 2141-8230</span></a></li>
              <li><a href="https://www.google.com/maps/place/ESCRIT%C3%93RIO+DE+ADVOCACIA+-+MARTINS+ADVOGADOS+ASSOCIADOS/@-7.2320852,-39.4141653,17z/data=!3m1!4b1!4m6!3m5!1s0x7a185f9f8c3a581:0x8bde87e96d282b79!8m2!3d-7.2320852!4d-39.411585!16s%2Fg%2F11f62zqsyh?entry=ttu">
                <HiOutlineLocationMarker className="footer-icon" /> <span>Rua Dr. João Pessoa n. 338-B, Centro, Crato - CE</span>
              </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <span className="footer-heading">Nosso Escritório</span>
            <div className="footer-office-location">
              <input type="button" className="btn-cg botao-secundario" value="Crato" onClick={()=>{}} />
              <a href="https://www.google.com/maps/place/ESCRIT%C3%93RIO+DE+ADVOCACIA+-+MARTINS+ADVOGADOS+ASSOCIADOS/@-7.2320852,-39.4141653,17z/data=!3m1!4b1!4m6!3m5!1s0x7a185f9f8c3a581:0x8bde87e96d282b79!8m2!3d-7.2320852!4d-39.411585!16s%2Fg%2F11f62zqsyh?entry=ttu">
                <img className="mapa-cg" src={map} alt="Localização do escritório em Crato" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy container">
        <p className="footer-copy-text">Copyright © 2024</p>
        <p className="footer-copy-text">Todos os Direitos Reservados</p>
      </div>
    </footer>
  );
};

export default FooterComponent
