import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Importance from './components/Importance';
import Structure from './components/Structure';
import LLMSection from './components/LLMSection';
import PracticeGuide from './components/PracticeGuide';
import PromptLibrary from './components/PromptLibrary';
import PracticePlayground from './components/PracticePlayground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Importance />
        <Structure />
        <LLMSection />
        <PracticeGuide />
        <PracticePlayground />
        <PromptLibrary />
      </main>
      <Footer />
    </div>
  );
};

export default App;