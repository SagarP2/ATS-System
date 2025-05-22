import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in <span>Touch</span></h2>
          <p className="contact-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <h3>Email Us</h3>
              <p>support@atsanalyzer.com</p>
              <p>info@atsanalyzer.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <h3>Visit Us</h3>
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94107</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              <FiSend className="send-icon" />
            </button>

            {submitStatus === 'success' && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 54px 48px;
          background-color: transparent;
          max-width: 78rem;
          margin: 0 auto;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: start;
          margin-bottom: 28px;
        }

        .contact-title {
          font-size: 3.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }

        .contact-title span {
          color: #8a2be2;
        }

        .contact-subtitle {
          color: #9ca3af;
          font-size: 1.1rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-card {
          background-color: #23232b;
          padding: 24px;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background-color: #8a2be2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .info-icon svg {
          width: 24px;
          height: 24px;
          color: white;
        }

        .info-card h3 {
          color: #fff;
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        .info-card p {
          color: #9ca3af;
          margin: 4px 0;
        }

        .contact-form {
          background-color: #23232b;
          padding: 46px 32px ;
          border-radius: 12px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          color: #fff;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background-color: #1a1a1a;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          resize:none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8a2be2;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #666;
        }

        .submit-button {
          background-color: #8a2be2;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          background-color: #6a1cb2;
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .send-icon {
          width: 20px;
          height: 20px;
        }

        .success-message {
          color: #10b981;
          margin-top: 16px;
          text-align: center;
        }

        .error-message {
          color: #ef4444;
          margin-top: 16px;
          text-align: center;
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
          .contact-section {
            padding: 80px 48px;
          }
        }

        /* Tablet and smaller screens */
        @media (max-width: 1024px) {
          .contact-section {
            padding: 48px 32px;
          }

          .contact-title {
            font-size: 2.75rem;
          }
        }

        /* Mobile landscape */
        @media (max-width: 900px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .contact-info {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .info-card {
            flex: 1 1 300px;
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          .contact-section {
            padding: 32px 16px;
          }

          .contact-title {
            font-size: 2.25rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .contact-info {
            flex-direction: column;
          }

          .info-card {
            width: 100%;
          }

          .contact-form {
            padding: 24px 16px;
          }

          .form-group input,
          .form-group textarea {
            padding: 10px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 375px) {
          .contact-title {
            font-size: 2rem;
          }

          .info-card {
            padding: 20px;
          }

          .info-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
