import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../images/hero-img.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Upload');
  };

  const handleMoreTemplates = () => {
    const templatesSection = document.getElementById('templates');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Your AI-Powered <span className="hero-highlight">Design</span> Assistant
        </h1>
        <p className="hero-subtext">
          Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
        </p>
        <div className="hero-btns">
          <button onClick={handleGetStarted} className="hero-btn-primary">
            Get Started
          </button>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img 
          src={HeroImage} 
          alt="3D Abstract" 
          className="hero-image" 
        />
      </div>
      
      <style>{`
        .hero-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: #23232b;
          border-radius: 1.5rem;
          padding: 64px 48px;
          position: relative;
          overflow: hidden;
          max-width: 78rem;
          max-height: 35rem;
          margin: 3rem auto;
          gap: 2rem;
          color: white;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 600;
          color: #fff;
          font-family: 'Poppins', 'Inter', sans-serif;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-highlight {
          color: #8a2be2;
        }

        .hero-subtext {
          font-size: 1.2rem;
          color: #b3b3c6;
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .hero-btns {
          display: flex;
          gap: 18px;
        }

        .hero-btn-primary {
          background: #8a2be2;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 0.7rem;
          padding: 14px 36px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-btn-primary:hover {
          background: #6a1cb2;
          transform: translateY(-2px);
        }

        .hero-btn-secondary {
          background: #2d2d2d;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 0.7rem;
          padding: 14px 36px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-btn-secondary:hover {
          background: #23232b;
          transform: translateY(-2px);
        }

        .hero-image-wrap {
          flex-shrink: 0;
          z-index: 2;
        }

        .hero-image {
          display: inline-block;
          width: 400px;
          height: 400px;
          transition: transform 0.3s ease;
          object-fit: contain;
          
        }

        .hero-image:hover {
          transform: scale(1.05);
        }

        /* Large screens */
        @media (min-width: 1280px) {
          .hero-section {
            padding:0px 48px;
          }

          .hero-title {
            font-size: 4.2rem;
          }
        }

        /* Tablet and smaller screens */
        @media (max-width: 1024px) {
          .hero-section {
            padding: 48px 32px;
          }

          .hero-title {
            font-size: 3.2rem;
          }

          .hero-subtext {
            font-size: 1.1rem;
          }

          .hero-image {
            width: 250px;
            height: 250px;
          }
        }

        /* Mobile landscape */
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 40px 24px;
            max-width:800px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-btns {
            justify-content: center;
          }

          .hero-image-wrap {
            margin-top: 2rem;
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          .hero-section {
            padding: 32px 16px;
            margin: 2rem 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtext {
            font-size: 1rem;
            margin-bottom: 32px;
          }

          .hero-btns {
            flex-direction: column;
            gap: 12px;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            padding: 12px 24px;
            font-size: 1rem;
          }

          .hero-image {
            width: 200px;
            height: 200px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 375px) {
          .hero-section {
            padding: 32px 16px;
            margin: 2rem 1rem;
          }
          .hero-title {
            font-size: 2rem;
          }

          .hero-image {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

