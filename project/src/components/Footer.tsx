import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-8 px-4 text-center border-t border-gray-700 mt-12" style={{background:'var(--background)', color:'var(--text)'}}>
    <div className="mb-2">&copy; {new Date().getFullYear()} CYBERDEV. All rights reserved.</div>
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
    </div>
  </footer>
);

export default Footer;