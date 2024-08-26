// src/styles.js
import styled from 'styled-components';
import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

export const AppHeader = styled(Header)`
   background-color: rgba(14, 57, 94, 0.8);
    position: fixed;
    width: 100vw;
    z-index: 3;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

  img {
    height: 60px;
    margin-left: 7vw
  }
    @media (max-width: 768px) {
    height: 10%;
    img {
      height:35%;
       margin-left: 0vw
    }
  }

  .navbar-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export const ContactButton = styled(Button)`
    height: 40px;
    width: 20%;
    background-color: #8B173B;
    border-color: #8B173B;
    color: white;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-weight: bold;

  h3 {
    font-size: 100%;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 80%;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 60%;
    }
  }
`;

export const AppContent = styled(Content)`
  background-color: #fff;
  flex: 1;
`;

export const AppFooter = styled(Footer)`
  text-align: center;
  background-color: white;
`;
