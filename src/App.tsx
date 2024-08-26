// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout} from 'antd';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';
import logo from '../src/img/logos/logo-alt.png';
import FooterComponent from './componentes/Footer';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import ServicosDetalhes from './pages/ServicosDetalhes';
import Time from './pages/Time';
import { AppHeader, AppContent, AppFooter, ContactButton  } from './styles';
const { Header } = Layout;


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      
        <AppHeader>
            <img src={logo} alt="Logo" />
            <div className="navbar-container">
              <Navbar />
            </div>
            <ContactButton href="https://wa.me/5588996462316" target="_blank" rel="noopener noreferrer">
              <h3>FALE CONOSCO</h3>
            </ContactButton>
          
        </AppHeader>
       
        <AppContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos-detalhes" element={<ServicosDetalhes />} />
            <Route path="/time" element={<Time />} />
          </Routes>
        </AppContent>
        <AppFooter>
          <FooterComponent />
        </AppFooter>
      </Layout>
    </Router>
  );
};

export default App;
