import React from 'react';
import { FiUpload, FiZap, FiEdit } from 'react-icons/fi';

const steps = [
  {
    icon: <FiUpload />,
    title: 'Upload Brief',
    desc: 'Share your project details and let our AI grasp your vision.'

  },
  {
    icon: <FiZap />,
    title: 'Generate Designs',
    desc: 'Watch as our AI crafts unique design ideas tailored to you.'
  },
  {
    icon: <FiEdit />,
    title: 'Refine Creation',
    desc: 'Perfect your chosen concept with easy-to-use AI tools.'
  }
];

const HowItWorks = () => (
  <>
    <style>{`
      .how-section {
        background-color:transperant;
        padding: 64px 48px;
        border-radius: 1.5rem;
        max-width: 78rem;
        margin: 0 auto;
      }

      .how-title {
        font-size: 3.25rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0.5rem;
      }

      .how-title span {
        color: #a855f7;
      }
      
      .heading{
        display:flex;
        flex-direction:column;
        justify-content:start;
        align-item:flex-start;
        }

      .how-desc {
        color: #9ca3af;
        max-width: 42rem;
        font-size: 1rem;
        line-height: 1.6;
      }

      .how-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 2rem;
      }

      @media (min-width: 768px) {
        .how-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .how-card {
        background-color: #23232b;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        transition: transform 0.2s ease;
      }

      .how-card:hover {
        transform: translateY(-5px);
      }

      .icon-wrapper {
        background-color: #a855f7;
        padding: 0.75rem;
        border-radius: 9999px;
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon-wrapper svg {
        width: 1.75rem;
        height: 1.75rem;
        color: white;
      }

      .how-card h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0.5rem;
      }

      .how-card p {
        font-size: 0.95rem;
        color: #d1d5db;
      }
    `}</style>

    <section className="how-section">
      <div className='heading'>
        <h2 className="how-title">
          Unleash Your <span>Creativity</span>
        </h2>
        <p className="how-desc">
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.
        </p>
      </div>
      <div className="how-grid">
        {steps.map((step, idx) => (
          <div key={idx} className="how-card" >
            <div className="icon-wrapper">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default HowItWorks;
