import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUpload, FiFileText } from 'react-icons/fi';

const UploadComponent = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFileValidation(droppedFile);
  };

  const handleFileValidation = (file) => {
    if (!file) return;
    
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; 

    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file');
      return;
    }

    if (file.size > maxSize) {
      setError('File size should be less than 5MB');
      return;
    }

    setError('');
    setFile(file);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    handleFileValidation(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !jobTitle) return;

    setIsLoading(true);
    setError('');

    try {
      // Create form data
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('jobTitle', jobTitle);
      formData.append('jobDescription', jobDescription);

      // In a real app, you would send this to your API
      // const response = await fetch('/api/analyze-resume', {
      //   method: 'POST',
      //   body: formData,
      // });
      
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store the data in localStorage for the results page
      localStorage.setItem('resumeData', JSON.stringify({
        jobTitle,
        jobDescription,
        fileName: file.name
      }));

      navigate('/results');
    } catch (err) {
      setError('Failed to upload resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <style>{`
        .upload-container {
          padding: 2.3rem 1rem;
          color: white;
          font-family: 'Inter', sans-serif;
        }
        .form-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .heading {
          font-size: 2rem;
          font-weight: bold;
          text-align: start;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .upload-box {
          border: 2px dashed;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: 0.2s;
        }
        .upload-box.dragging {
          border-color: #a855f7;
          background-color: rgba(168, 85, 247, 0.1);
        }
        .upload-box.default {
          border-color: #4b5563;
        }
        .upload-box input {
          display: none;
        }
        .upload-box label {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .upload-box svg {
          width: 48px;
          height: 48px;
          color: #a855f7;
          margin-bottom: 1rem;
        }
        .text-lg {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        .text-sm {
          font-size: 0.875rem;
          color: #9ca3af;
        }
        .input-field,
        .textarea-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background-color: #1f1f23;
          border: 1px solid #4b5563;
          color: white;
          resize:none;
        }
        .input-field:focus,
        .textarea-field:focus {
          outline: none;
          border-color: #a855f7;
        }
        .btn {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #a855f7;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .btn:disabled {
          background-color: #6b7280;
          cursor: not-allowed;
          opacity: 0.7;
        }
        .tips {
          margin-top: 4.3rem;
          padding: 1.5rem;
          background-color: #1f1f23;
          border-radius: 1rem;
        }
        .tips h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .tips svg {
          margin-right: 0.5rem;
        }
        .tips ul {
          color: #9ca3af;
          padding-left: 1rem;
        }
        .error-message {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.5rem;
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

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="form-wrapper"
        >
          
          <form onSubmit={handleSubmit} className="form">
          <h1 className="heading">
            Optimize Your Resume for the Job
          </h1>

            {/* File Upload */}
            <div
              className={`upload-box ${isDragging ? 'dragging' : 'default'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                accept=".pdf,.docx"
                onChange={handleFileChange}
              />
              <label htmlFor="resume">
                <FiUpload />
                <p className="text-lg">
                  {file ? file.name : 'Drag and drop your resume here'}
                </p>
                <p className="text-sm">or click to browse (PDF or DOCX)</p>
              </label>
            </div>
            {error && <p className="error-message">{error}</p>}

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="input-field"
                placeholder="e.g., Frontend Developer"
                required
              />
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription">Job Description (Optional)</label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="textarea-field"
                placeholder="Paste the job description here for better matching..."
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn ${isLoading ? 'loading' : ''}`}
              disabled={!file || !jobTitle || isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Analyze My Resume'}
            </button>
          </form>
        

          {/* Tips Section */}
          <div className="tips">
            <h2>
              <FiFileText />
              Tips for Best Results
            </h2>
            <ul>
              <li>• Use a clear, professional format</li>
              <li>• Include relevant keywords from the job description</li>
              <li>• Keep your resume concise and well-organized</li>
              <li>• Highlight your most relevant experience</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadComponent;
