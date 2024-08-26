import styled from 'styled-components';
import { animated } from 'react-spring';
import { Button } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled(animated.section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ color }) => color || 'white'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  padding: ${({ padding }) => padding || '0'};

  ${({ customStyles }) => customStyles || ''}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vw;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 768px) {
    height: 100vw;
    width: 100vw;

  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  background-color: rgba(14, 57, 94, 0.9);
  z-index: 2;

  @media (max-width: 768px) {
    background-color: rgba(14, 57, 94, 0.8);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: 20px;

  h1 {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Highlight = styled.span`
  color: #B22222;
`;

export const ContactButton = styled(Button)`
  margin-top: 2%;
  background-color: #8B173B;
  border-color: #8B173B;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const InfoText = styled.p`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  height: 390px;
  width: 470px;

  @media (max-width: 768px) {
    height: 200px;
    width: 50vw;
    padding: 2vw
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
