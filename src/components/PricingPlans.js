import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPlans = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanChange = (newPlan) => {
    setPlan(newPlan);
  };

  const handleGetStarted = async (planType) => {
    setIsLoading(true);
    try {
      // In a real app, you would handle the subscription process here
      // For now, we'll just navigate to the upload page
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate('/upload');
    } catch (error) {
      console.error('Failed to process subscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .pricing-section {
          background-color: transparent;
          padding: 64px 48px;
          border-radius: 1.5rem;
          max-width: 78rem;
          margin: 0 auto;
        }

        .pricing-title {
          font-size: 3.25rem;
          font-weight: 600;
          color: #fff;
          text-align: left;
        }

        .pricing-title span {
          color: #a855f7;
        }

        .pricing-subtitle {
          text-align: start;
          color: #9ca3af;
          max-width: 42rem;
          font-size: 1rem;
        }

        .plan-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .toggle-button {
          background: none;
          border: none;
          color: #9ca3af;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .toggle-button.active {
          color: #fff;
          font-weight: 600;
        }

        .toggle-switch {
          position: relative;
          width: 48px;
          height: 24px;
          margin: 0 1rem;
          background-color: #6a1cb2;
          border-radius: 12px;
          cursor: pointer;
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          top: 2px;
          left: 2px;
          transition: transform 0.2s;
        }

        .toggle-switch.monthly::after {
          transform: translateX(0);
        }

        .toggle-switch.yearly::after {
          transform: translateX(24px);
        }

        .pricing-grid {
          display: grid;
          gap: 2rem;
          max-width: 96rem;
          margin: 0 auto;
        }

        .card {
          background-color: #23232b;
          border-radius: 1rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s;
          height: 100%;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .card-subtitle {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .features li {
          color: #d1d5db;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
        }

        .features li::before {
          content: '✓';
          color: #10b981;
          margin-right: 0.5rem;
        }

        .btn {
          background-color: #8a2be2;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: center;
        }

        .btn:hover {
          background-color: #6a1cb2;
          transform: translateY(-2px);
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading {
          position: relative;
          pointer-events: none;
        }

        .loading::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 50%;
          margin: -10px 0 0 -10px;
          border: 2px solid #ffffff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: button-loading-spinner 1s linear infinite;
        }

        @keyframes button-loading-spinner {
          from {
            transform: rotate(0turn);
          }
          to {
            transform: rotate(1turn);
          }
        }

        /* Large screens */
        @media (min-width: 1280px) {
          .pricing-section {
            padding: 80px 48px 0 ;
          }

          .pricing-title {
            font-size: 3.75rem;
          }

          .pricing-grid {
            gap: 3rem;
          }
        }

        /* Tablet and smaller screens */
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile landscape */
        @media (max-width: 900px) {
          .pricing-section {
            padding: 48px 32px;
          }

          .pricing-title {
            font-size: 2.75rem;
          }

          .pricing-grid {
            gap: 1.5rem;
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          .pricing-section {
            padding: 32px 16px;
          }

          .pricing-title {
            font-size: 2.25rem;
          }

          .pricing-subtitle {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
          }

          .plan-toggle {
            margin-bottom: 2rem;
          }

          .toggle-button {
            font-size: 0.875rem;
            padding: 0.375rem 0.75rem;
          }

          .toggle-switch {
            width: 40px;
            height: 20px;
            margin: 0 0.75rem;
          }

          .toggle-switch::after {
            width: 16px;
            height: 16px;
          }

          .toggle-switch.yearly::after {
            transform: translateX(20px);
          }

          .card {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .features li {
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
          }

          .btn {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
          }
        }

        /* Small mobile devices */
        @media (max-width: 375px) {
          .pricing-title {
            font-size: 2rem;
          }

          .card {
            padding: 1.25rem;
          }
        }
      `}</style>

      <section className="pricing-section" id="pricing">
        <h2 className="pricing-title">
          Choose Your <span>Plan</span>
        </h2>
        <p className="pricing-subtitle">
          Select the perfect plan for your needs. All plans include our core features.
        </p>

        <div className="plan-toggle">
          <button
            className={`toggle-button ${plan === 'monthly' ? 'active' : ''}`}
            onClick={() => handlePlanChange('monthly')}
          >
            Monthly
          </button>
          <div
            className={`toggle-switch ${plan}`}
            onClick={() => handlePlanChange(plan === 'monthly' ? 'yearly' : 'monthly')}
          />
          <button
            className={`toggle-button ${plan === 'yearly' ? 'active' : ''}`}
            onClick={() => handlePlanChange('yearly')}
          >
            Yearly
          </button>
        </div>

        <div className="pricing-grid">
          {/* Basic Plan */}
          <div className="card">
            <div>
              <h3 className="card-title">Basic</h3>
              <div className="card-subtitle">
                {plan === 'monthly' ? '$9.99/m' : '$99.99/y'}
              </div>
              <ul className="features">
                <li>Resume analysis</li>
                <li>Basic ATS scoring</li>
                <li>Keyword suggestions</li>
                <li>Format checking</li>
                <li>5 analyses per month</li>
              </ul>
            </div>
            <button
              className={`btn ${isLoading ? 'loading' : ''}`}
              onClick={() => handleGetStarted('basic')}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="card">
            <div>
              <h3 className="card-title">Pro</h3>
              <div className="card-subtitle">
                {plan === 'monthly' ? '$19.99/m' : '$199.99/y'}
              </div>
              <ul className="features">
                <li>All Basic features</li>
                <li>Advanced ATS scoring</li>
                <li>AI-powered suggestions</li>
                <li>Unlimited analyses</li>
                <li>Priority support</li>
                <li>Resume templates</li>
              </ul>
            </div>
            <button
              className={`btn ${isLoading ? 'loading' : ''}`}
              onClick={() => handleGetStarted('pro')}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="card">
            <div>
              <h3 className="card-title">Enterprise</h3>
              <div className="card-subtitle">
                {plan === 'monthly' ? '$29.99/m' : '$299.99/y'}
              </div>
              <ul className="features">
                <li>All Pro features</li>
                <li>Dedicated account manager</li>
                <li>Custom AI solutions</li>
                <li>Onboarding sessions</li>
                <li>24/7 priority support</li>
                <li>Advanced analytics</li>
                <li>Secure cloud storage</li>
              </ul>
            </div>
            <button
              className={`btn ${isLoading ? 'loading' : ''}`}
              onClick={() => handleGetStarted('enterprise')}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
