import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../images/hero-img.png';;

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Upload');
  };

  return (
    <>
      <style>{`
        .final-cta {
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

        .cta-content {
          flex: 1;
          max-width: 600px;
          z-index: 20;
        }

        .cta-heading {
          font-size: 3.25rem;
          font-weight: 600;
          color: #fff;
          font-family: 'Poppins', 'Inter', sans-serif;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .cta-heading .highlight {
          color: #8a2be2;
        }

        .cta-text {
          font-size: 1.2rem;
          color: #b3b3c6;
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .cta-button {
          background-color: #8a2be2;
          color: white;
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cta-button:hover {
          background-color: #6a1cb2;
          transform: translateY(-2px);
        }

        .image-wrapper {
          flex-shrink: 0;
          z-index: 10;
        }

        .cta-image {
          display: inline-block;
          width: 400px;
          height: 400px;
          transition: transform 0.3s ease;
          object-fit: contain;
          position
        }

        .cta-image:hover {
          transform: scale(1.05);
        }

        .gradient-overlay {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(35, 35, 43, 0.8));
        }

        /* Large screens */
        @media (min-width: 1280px) {
          .final-cta {
            padding: 0px 48px;
          }

          .cta-heading {
            font-size: 3.75rem;
          }
        }

        /* Tablet and smaller screens */
        @media (max-width: 1024px) {
          .final-cta {
            padding: 48px 32px;
          }

          .cta-heading {
            font-size: 2.75rem;
          }

          .cta-text {
            font-size: 1.1rem;
          }

          .cta-image {
            width: 16rem;
            height: 16rem;
          }
        }

        /* Mobile landscape */
        @media (max-width: 900px) {
          .final-cta {
            flex-direction: column;
            text-align: center;
            padding: 40px 24px;
          }

          .cta-content {
            max-width: 100%;
          }

          .cta-button {
            margin: 0 auto;
          }

          .image-wrapper {
            margin-top: 2rem;
          }

          .gradient-overlay {
            display: none;
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          .final-cta {
            padding: 32px 16px;
            margin: 2rem auto;
          }

          .cta-heading {
            font-size: 2.25rem;
          }

          .cta-text {
            font-size: 1rem;
            margin-bottom: 32px;
          }

          .cta-button {
            width: 100%;
            padding: 0.75rem 1.25rem;
            font-size: 1rem;
          }

          .cta-image {
            width: 14rem;
            height: 14rem;
          }
        }

        /* Small mobile devices */
        @media (max-width: 375px) {
          .cta-heading {
            font-size: 2rem;
          }

          .cta-image {
            width: 12rem;
            height: 12rem;
          }
        }
      `}</style>

      <section className="final-cta">
        <div className="cta-content">
          <h2 className="cta-heading">
            Start Your Design <span className="highlight">Journey Today</span>
          </h2>
          <p className="cta-text">
            Sign up now and experience the power of AI-driven design without any commitment.
          </p>
          <button onClick={handleGetStarted} className="cta-button">
            Get Started
          </button>
        </div>
        <div className="image-wrapper">
          <img src={HeroImage} className='cta-image' />
        </div>

      </section>
    </>
  );
};

export default FinalCTA;
