import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div id="sidebar" className={sidebarOpen ? 'active' : ''}>
        <ul>
          <li><a href="/">PAGINA PRINCIPAL</a></li>
          <li><a href="/quem-somos">SOBRE</a></li>
          <li><a href="/time">NOSSO TIME</a></li>
          <li><a href="/servicos">SERVICOS</a></li>
          <li><a href="#">CONTATOS</a></li>
        </ul>
      </div>

      <button id="sidebarCollapse" onClick={toggleSidebar}>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
      </button>
    </>
  );
};

export default Navbar;
