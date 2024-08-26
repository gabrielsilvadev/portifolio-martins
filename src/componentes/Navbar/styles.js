// src/components/Navbar/styles.js
import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  left: -200%;
  top: 15%;
  width: 200px;
  background-color: rgba(14, 57, 94, 0.95); 
  transition: left 0.3s ease;
  border-radius: 5px;
  display: none;

  &.active {
    left: 0%; 
    display: flex;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10%;
  }

  ul li {
    padding: 0px;
    margin: 10%;
    border-bottom: 1px solid white;
  }

  ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #8B173B;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    left: -100%; /* Começa fora da tela em dispositivos móveis */
    top: 0;
    height: 100vh; /* Ocupa a altura total da tela */
  }
`;

export const SidebarCollapse = styled.button`
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 999;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 3px;
    position: relative;
    background: #fff;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(3px, 4px);
      width: 30px;
      height: 3px;
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(3px, -4px);
      width: 30px;
      height: 3px;
    }

    &.close:nth-child(1),
    &.close:nth-child(2),
    &.close:nth-child(3) {
      width: 30px;
      height: 3px;
    }

    &.close:nth-child(2),
    &.close:nth-child(3) {
      margin-top: 5px;
    }
  }

  @media (max-width: 768px) {
    left: 10px; /* Ajuste a posição para dispositivos móveis */
    top: 10px;
  }
`;
