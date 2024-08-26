// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { Sidebar, SidebarCollapse } from './styles';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar className={sidebarOpen ? 'active' : ''}>
        <ul>
          <li><a href="/">PAGINA PRINCIPAL</a></li>
          <li><a href="/quem-somos">SOBRE</a></li>
          <li><a href="/time">NOSSO TIME</a></li>
          <li><a href="/servicos">SERVIÇOS</a></li>
          <li><a href="#">CONTATOS</a></li>
        </ul>
      </Sidebar>

      <SidebarCollapse onClick={toggleSidebar}>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
        <span className={sidebarOpen ? 'open' : 'close'}></span>
      </SidebarCollapse>
    </>
  );
};

export default Navbar;
