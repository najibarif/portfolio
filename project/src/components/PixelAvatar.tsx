import React from 'react';
import { motion } from 'framer-motion';

const PixelAvatar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="relative w-32 h-32 sm:w-48 sm:h-48 mb-8"
    >
      {/* The Avatar Container with pixel border */}
      <div className="w-full h-full bg-background-light rounded-md overflow-hidden relative">
        <div className="absolute inset-0 border-2 border-primary"></div>
        
        {/* Pixel Avatar - An 8x8 grid */}
        <div className="w-full h-full grid grid-cols-8 grid-rows-8">
          {/* Row 1 */}
          <div className="bg-background"></div>
          <div className="bg-background"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-background"></div>
          <div className="bg-background"></div>
          
          {/* Row 2 */}
          <div className="bg-background"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-background"></div>
          
          {/* Row 3 */}
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          
          {/* Row 4 */}
          <div className="bg-primary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-secondary"></div>
          <div className="bg-secondary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-primary"></div>
          
          {/* Row 5 */}
          <div className="bg-primary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-secondary"></div>
          <div className="bg-secondary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-primary"></div>
          
          {/* Row 6 */}
          <div className="bg-primary"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-primary"></div>
          
          {/* Row 7 */}
          <div className="bg-background"></div>
          <div className="bg-primary"></div>
          <div className="bg-white"></div>
          <div className="bg-accent"></div>
          <div className="bg-accent"></div>
          <div className="bg-white"></div>
          <div className="bg-primary"></div>
          <div className="bg-background"></div>
          
          {/* Row 8 */}
          <div className="bg-background"></div>
          <div className="bg-background"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-background"></div>
          <div className="bg-background"></div>
        </div>
        
        {/* Scanlines overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-lg -z-10"></div>
      
      {/* Animated corner pixels */}
      <motion.div 
        className="absolute -top-2 -left-2 w-4 h-4 bg-primary"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 5px #00FFFF',
            '0 0 10px #00FFFF',
            '0 0 5px #00FFFF'
          ]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -top-2 -right-2 w-4 h-4 bg-secondary"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 5px #FF00FF',
            '0 0 10px #FF00FF',
            '0 0 5px #FF00FF'
          ]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 0.5
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 5px #39FF14',
            '0 0 10px #39FF14',
            '0 0 5px #39FF14'
          ]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 5px #00FFFF',
            '0 0 10px #00FFFF',
            '0 0 5px #00FFFF'
          ]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1.5
        }}
      ></motion.div>
    </motion.div>
  );
};

export default PixelAvatar;