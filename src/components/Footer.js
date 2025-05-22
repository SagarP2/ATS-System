import React from 'react';

const Footer = () => (
  <footer className="bg-dark-lighter py-8 ">
    <div className="container mx-auto text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Your AI-Powered Design Assistant. All rights reserved.
    </div>
  </footer>
);

export default Footer; 