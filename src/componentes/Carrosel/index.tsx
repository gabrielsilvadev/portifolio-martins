import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import backgroundImg1 from "../../img/escritorio/escritorio-2.jpeg";
import backgroundImg2 from "../../img/escritorio/escritorio.jpeg";
import backgroundImg3 from "../../img/escritorio/espaco.jpeg";
import backgroundImg4 from "../../img/escritorio/liberdade.jpeg";

const images = [
  { id: 1, src: backgroundImg1 },
  { id: 2, src: backgroundImg2 },
  { id: 3, src: backgroundImg3 },
  { id: 4, src: backgroundImg4 },
  { id: 4, src: backgroundImg4 },
];

const ImageCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveCarousel = (direction: number) => {
    const totalSlides = images.length;
    let newSlide = (currentSlide + direction + totalSlides) % totalSlides;
    if (newSlide < 0) {
      newSlide = totalSlides - 1;
    }
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1); // Move to the next slide every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]);

  return (
    <div className="container">
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={image.id} className="carousel-item">
              <img src={image.src} alt={`Image ${image.id}`} className="carousel-image" />
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={() => moveCarousel(-1)}><FiChevronLeft size={60}/></button>
        <button className="carousel-control next" onClick={() => moveCarousel(1)}><FiChevronRight size={60}/></button>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="text-container">
        <p className="main-text">
          Serviço jurídico exemplar presencialmente no Crato
          <br />
          <span className="sub-text">
            Descubra nosso escritório no Crato, onde a excelência jurídica se encontra com o atendimento personalizado. Estamos aqui para servir e oferecer soluções eficazes para suas necessidades legais.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
