import React from 'react';

const logos = [
  'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'
];

const TrustedLogos = () => (
  <>
    <style>{`
      .trusted-logos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 2rem 1rem;
        max-width: 78rem;
        margin: 3rem auto auto auto;
      }

      .logo-item {
        color: white;
        font-size: 1.125rem;
        font-weight: bold;
        opacity: 0.6;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
    `}</style>

    <section className="trusted-logos">
      {logos.map((logo, idx) => (
        <div key={idx} className="logo-item">{logo}</div>
      ))}
      
    </section>
  </>
);

export default TrustedLogos;
