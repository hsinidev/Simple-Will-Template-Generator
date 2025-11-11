// Fix: Implement the root App component to structure the application.
import React from 'react';
import Layout from './components/Layout';
import WillGenerator from './components/WillGenerator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl">
            AI-Powered Will Generator
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Create a simple last will and testament in minutes. Fill in your details, generate the document, and get an AI-powered review for clarity and completeness.
          </p>
        </header>

        <WillGenerator />
        
        <hr className="border-slate-700" />
        
        <SeoArticle />
      </div>
    </Layout>
  );
};

export default App;
