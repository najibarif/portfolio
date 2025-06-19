import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  codeUrl
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="project-card animated-border rounded-md overflow-hidden flex flex-col h-full min-h-[480px]"
    >
      {/* Project Image */}
      <div className="relative h-48 min-h-[192px] overflow-hidden border-b-2 border-primary/30">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50 pointer-events-none"></div>
        
        {/* Pixel Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-secondary"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary"></div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm text-primary mb-2" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{title}</h3>
        <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-background border border-primary/50 text-primary rounded-sm"
              style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-3 mt-auto">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-xs flex items-center space-x-1 py-1"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </motion.a>
          )}
          
          {codeUrl && (
            <motion.a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-xs flex items-center space-x-1 py-1"
              style={{ borderColor: '#FF00FF', color: '#FF00FF' }}
            >
              <Github size={12} />
              <span>View Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;