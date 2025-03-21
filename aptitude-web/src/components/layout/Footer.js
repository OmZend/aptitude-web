import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">© 2025 Education Hub. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;