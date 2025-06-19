import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;