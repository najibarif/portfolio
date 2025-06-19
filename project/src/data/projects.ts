export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Arcade",
    description: "A retro arcade game collection built with WebGL and React",
    imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "WebGL", "JavaScript", "CSS"],
    liveUrl: "https://example.com/neon-arcade",
    codeUrl: "https://github.com/example/neon-arcade"
  },
  {
    id: 2,
    title: "CyberDeck",
    description: "A cyberpunk-themed productivity dashboard for developers",
    imageUrl: "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["TypeScript", "React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://example.com/cyberdeck",
    codeUrl: "https://github.com/example/cyberdeck"
  },
  {
    id: 3,
    title: "DataMatrix",
    description: "Data visualization tool with cyberpunk styling and animations",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["D3.js", "React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com/datamatrix",
    codeUrl: "https://github.com/example/datamatrix"
  },
  {
    id: 4,
    title: "NightCity Chat",
    description: "Real-time chat app with cyberpunk UI and end-to-end encryption",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Encryption", "WebSockets"],
    liveUrl: "https://example.com/nightcity-chat",
    codeUrl: "https://github.com/example/nightcity-chat"
  },
  {
    id: 5,
    title: "Neural Link",
    description: "AI-powered content creation tool with cyberpunk interface",
    imageUrl: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["AI", "React", "Python", "TensorFlow"],
    liveUrl: "https://example.com/neural-link",
    codeUrl: "https://github.com/example/neural-link"
  },
  {
    id: 6,
    title: "Pixel Forge",
    description: "Browser-based pixel art creation tool with community features",
    imageUrl: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Canvas API", "React", "GraphQL", "PostgreSQL"],
    liveUrl: "https://example.com/pixel-forge",
    codeUrl: "https://github.com/example/pixel-forge"
  }
];