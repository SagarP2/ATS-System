import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Plan', path: '/#pricing' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: #23232b;
          padding: 0.5rem 0;
          width: 100%;
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          font-size: 2.5rem;
          font-weight: bold;
          color: #8a2be2;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-brand:hover {
          color: #6a1cb2;
        }

        .nav-items {
          display: none;
        }

        .nav-button {
          background: transparent;
          border: none;
          color: #d1d5db;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s;
          padding: 0.5rem 1rem;
        }

        .nav-button:hover {
          color: #ffffff;
        }

        .btn-primary {
          background-color: #8a2be2;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #6a1cb2;
          transform: translateY(-2px);
        }

        .menu-toggle {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #23232b;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu .nav-button {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
        }

        .mobile-menu .btn-primary {
          width: 100%;
          text-align: center;
          margin-top: 0.5rem;
        }

        /* Tablet and larger screens */
        @media (min-width: 768px) {
          .nav-items {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .menu-toggle {
            display: none;
          }

          .mobile-menu {
            display: none;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          .nav-container {
            padding: 0 1rem;
          }

          .nav-brand {
            font-size: 2.75rem;
          }
        }

        
        /* Small screens */
        @media (max-width: 640px) {
          .nav-brand {
            font-size: 2rem;
          }

          .nav-button {
            font-size: 0.875rem;
          }

          .btn-primary {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            ATS Analyzer
          </Link>

          <div className="nav-items">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="nav-button"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/Upload')}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="nav-button"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/Upload')}
              className="btn-primary"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
