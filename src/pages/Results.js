import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiDownload, FiUpload, FiStar, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const Results = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Mock data - in a real app, this would come from your API
  const score = 78;
  const strengths = [
    'Strong technical skills section',
    'Clear work experience timeline',
    'Well-formatted education section',
    'Good keyword optimization',
    'Professional layout'
  ];
  const weaknesses = [
    'Missing key industry certifications',
    'Could use more quantifiable achievements',
    'Skills section needs better organization'
  ];
  const recommendations = [
    {
      type: 'critical',
      text: 'Add more relevant keywords from the job description',
    },
    {
      type: 'important',
      text: 'Quantify your achievements with specific numbers',
    },
    {
      type: 'suggestion',
      text: 'Consider adding a professional summary',
    },
  ];

  useEffect(() => {
    // Get resume data from localStorage
    const storedData = localStorage.getItem('resumeData');
    if (!storedData) {
      navigate('/upload');
      return;
    }
    setResumeData(JSON.parse(storedData));
  }, [navigate]);

  const handleDownloadReport = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would generate and download a PDF report
      // For now, we'll simulate the download
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a dummy PDF content
      const content = `
        Resume Analysis Report
        ---------------------
        Job Title: ${resumeData?.jobTitle}
        File Name: ${resumeData?.fileName}
        ATS Score: ${score}/100
        
        Strengths:
        ${strengths.map(s => `- ${s}`).join('\n')}
        
        Areas for Improvement:
        ${weaknesses.map(w => `- ${w}`).join('\n')}
        
        Recommendations:
        ${recommendations.map(r => `- ${r.text}`).join('\n')}
      `;

      // Create and download the file
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume-analysis-report.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download report:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // In a real app, you would send this to your API
      // await fetch('/api/request-review', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert('Thank you! We will review your request and get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-dark">
      <style>{`
        .bg-dark {
          background-color: #0f0f11;
          color: white;
        }
        .card {
          background-color: #1f1f23;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .score-circle {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }
        .score-circle svg {
          transform: rotate(-90deg);
        }
        .score-circle circle {
          fill: none;
          stroke-width: 8;
        }
        .score-circle .bg {
          stroke: #4b5563;
        }
        .score-circle .progress {
          stroke: #a855f7;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.5s ease;
        }
        .score-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          font-weight: bold;
        }
        .strength-item, .weakness-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .strength-item svg {
          color: #10b981;
          margin-right: 0.75rem;
        }
        .weakness-item svg {
          color: #ef4444;
          margin-right: 0.75rem;
        }
        .recommendation-card {
          background-color: #23232b;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .recommendation-card.critical {
          border-left: 4px solid #ef4444;
        }
        .recommendation-card.important {
          border-left: 4px solid #f59e0b;
        }
        .recommendation-card.suggestion {
          border-left: 4px solid #10b981;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-primary {
          background-color: #a855f7;
          color: white;
        }
        .btn-secondary {
          background-color: #23232b;
          color: white;
        }
        .btn svg {
          margin-right: 0.5rem;
        }
        .cta-section {
          background-color: #23232b;
          border-radius: 1rem;
          padding: 2rem;
          margin-top: 3rem;
        }
        .input-group {
          margin-bottom: 1rem;
        }
        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #9ca3af;
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          background-color: #1f1f23;
          border: 1px solid #4b5563;
          color: white;
        }
        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: #a855f7;
        }
        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
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
      `}</style>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Here's How Your Resume Matches the Job
          </h1>

          {/* Score Display */}
          <div className="card text-center mb-8">
            <div className="score-circle">
              <svg viewBox="0 0 100 100">
                <circle className="bg" cx="50" cy="50" r="45" />
                <circle
                  className="progress"
                  cx="50"
                  cy="50"
                  r="45"
                  strokeDasharray={`${score * 2.83} 283`}
                />
              </svg>
              <div className="score-value">{score}</div>
            </div>
            <h2 className="text-2xl font-semibold mt-4">ATS Score</h2>
            <p className="text-gray-400">
              Your resume has a good match with the job requirements
            </p>
          </div>

          {/* Strengths Section */}
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Strengths</h2>
            {strengths.map((strength, index) => (
              <div key={index} className="strength-item">
                <FiCheckCircle />
                <span>{strength}</span>
              </div>
            ))}
          </div>

          {/* Weaknesses Section */}
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Areas for Improvement</h2>
            {weaknesses.map((weakness, index) => (
              <div key={index} className="weakness-item">
                <FiAlertCircle />
                <span>{weakness}</span>
              </div>
            ))}
          </div>

          {/* Recommendations Section */}
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            {recommendations.map((rec, index) => (
              <div key={index} className={`recommendation-card ${rec.type}`}>
                <p>{rec.text}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              onClick={handleDownloadReport}
              disabled={isLoading}
            >
              <FiDownload />
              {isLoading ? 'Downloading...' : 'Download Report'}
            </button>
            <Link to="/upload" className="btn btn-secondary">
              <FiUpload />
              Re-upload Resume
            </Link>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h3 className="text-xl font-semibold mb-4">Want a Better Score?</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Request Free Review'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results; 