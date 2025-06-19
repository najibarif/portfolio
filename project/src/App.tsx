import React from 'react';
import HomePage from './pages/HomePage';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <HomePage />
    </AnimatePresence>
  );
};

export default App;