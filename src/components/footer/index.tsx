import React from 'react';

const Footer = () => {
    const actualYear = new Date().getFullYear();
    return (
        <footer className="flex gap-2 flex-wrap items-center justify-center text-sm text-slate-600">
        ©{actualYear} All rights reserved
        <a
          className="flex items-center gap-1 text-green-700 underline-offset-4 hover:underline hover:underline-offset-4"
          href="https://www.walkway.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          walkway.ai
        </a>
        
      </footer>
    );
};

export default Footer;