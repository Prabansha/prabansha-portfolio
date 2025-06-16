import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Spring Boot',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration. Built with modern technologies and following best practices.',
    techStack: ['React', 'Spring Boot', 'MySQL', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/prabansha',
    liveUrl: 'https://demo-ecommerce.com',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'Angular-based project management tool with real-time updates',
    longDescription: 'A collaborative task management system with real-time updates, team collaboration features, and comprehensive project tracking capabilities.',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'Socket.IO', 'Material UI'],
    githubUrl: 'https://github.com/prabansha',
    liveUrl: 'https://task-manager-demo.com',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Analytics Dashboard',
    description: 'Real-time weather data visualization with interactive charts',
    longDescription: 'A responsive weather analytics dashboard providing real-time weather data, forecasts, and interactive visualizations for multiple locations.',
    techStack: ['React', 'D3.js', 'REST API', 'Chart.js', 'Responsive Design'],
    githubUrl: 'https://github.com/prabansha',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: '4',
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing',
    longDescription: 'An AI-powered chat assistant built with modern NLP techniques, capable of understanding context and providing intelligent responses.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'React', 'Natural Language Processing'],
    githubUrl: 'https://github.com/prabansha',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Tech Solutions Ltd',
    period: '2024 - Present',
    description: [
      'Developed and maintained web applications using React and Spring Boot',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive UI components and RESTful APIs',
      'Participated in code reviews and agile development practices'
    ],
    type: 'work'
  },
  {
    id: '2',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Colombo',
    period: '2020 - 2024',
    description: [
      'Specialized in Software Engineering and Web Development',
      'Graduated with First Class Honors',
      'Active member of the Computer Science Society',
      'Completed final year project on Machine Learning applications'
    ],
    type: 'education'
  },
  {
    id: '3',
    title: 'Full Stack Web Development',
    company: 'FreeCodeCamp',
    period: '2023',
    description: [
      'Completed comprehensive full-stack development curriculum',
      'Built 5+ responsive web applications',
      'Learned modern frameworks and best practices',
      'Earned certification in responsive web design and JavaScript algorithms'
    ],
    type: 'certification'
  }
];

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', icon: '⚛️', level: 90 },
  { name: 'TypeScript', category: 'Frontend', icon: '🔷', level: 85 },
  { name: 'Angular', category: 'Frontend', icon: '🅰️', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨', level: 85 },
  { name: 'Spring Boot', category: 'Backend', icon: '🍃', level: 85 },
  { name: 'Java', category: 'Backend', icon: '☕', level: 90 },
  { name: 'Node.js', category: 'Backend', icon: '🟢', level: 75 },
  { name: 'MySQL', category: 'Backend', icon: '🐬', level: 80 },
  { name: 'Git', category: 'Tools', icon: '📋', level: 85 },
  { name: 'Docker', category: 'Tools', icon: '🐳', level: 70 },
  { name: 'AWS', category: 'Tools', icon: '☁️', level: 65 },
  { name: 'Clean Code', category: 'Concepts', icon: '✨', level: 90 },
  { name: 'System Design', category: 'Concepts', icon: '🏗️', level: 75 },
  { name: 'Agile', category: 'Concepts', icon: '🔄', level: 80 }
];