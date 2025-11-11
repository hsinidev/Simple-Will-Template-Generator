// Fix: Implement the Layout component.
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-400">Will Generator AI</span>
            </div>
            <div className="flex items-center">
              <a href="#generator" className="text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Generator</a>
              <a href="#faq" className="text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-slate-800/50 border-t border-slate-700 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Will Generator AI. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Disclaimer: This is not legal advice. Consult a qualified attorney for your legal needs.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
