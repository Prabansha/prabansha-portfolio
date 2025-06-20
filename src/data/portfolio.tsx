import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Spring Boot',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration. Built with modern technologies and following best practices.',
    techStack: ['React', 'Spring Boot', 'MySQL', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Prabansha/Online-Shopping-Web-application.git',
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
    githubUrl: 'https://github.com/Prabansha/Task-Management-System.git',
    liveUrl: 'https://task-manager-demo.com',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Super Market POS System',
    description: 'web-based point-of-sale (POS) system designed specifically for small to medium-sized retail businesses',
    longDescription: 'A responsive weather analytics dashboard providing real-time weather data, forecasts, and interactive visualizations for multiple locations.',
    techStack: ['React', 'Tailwind CSS', 'Supabase', 'Chart.js', 'Responsive Design'],
    githubUrl: 'https://github.com/Prabansha/pos.git',
    imageUrl: 'https://www.connectpos.com/wp-content/uploads/2023/09/wepik-export-20230906042021CKFB.jpeg',
    featured: false
  },
  {
    id: '4',
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing',
    longDescription: 'An AI-powered chat assistant built with modern NLP techniques, capable of understanding context and providing intelligent responses.',
    techStack: ['Next Js', 'Typescript', 'Firebase', 'React', 'Natural Language Processing'],
    githubUrl: 'https://github.com/Prabansha/nextjs-chat.git',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Web Developer Intern',
    company: 'Kodex Play (PVT)LTD',
    period: 'Nov 2024 - May 2025',
    description: [
      'Developed responsive websites using HTML, CSS, JavaScript, and PHP, ensuring crossbrowser compatibility and user-friendly interfaces.',
      'Customized and developed WordPress themes and plugins to meet client requirements, enhancing functionality and user experience',
      'Assisted in configuring domain names, DNS settings, and managing cPanel for hosting websites and setting up email accounts.',
      'Supported integration of third-party APIs and plugins into WordPress for added site functionality',
      'Troubleshot layout issues, plugin conflicts, and performance bottlenecks on client websites.',
      'Collaborated with the design and development team to deliver projects according to client specifications and deadlines.'
    ],
    type: 'work'
  },
  {
    id: '2',
    title: 'Bachelor of Information Technology',
    company: 'University of Moratuwa',
    period: 'Following',
    description: [
      'Currently pursuing a Bachelor of Information Technology offered by the University of Moratuwa.',
      'Focused on core areas including Software Engineering, Web Development, Databases, and Computer Networks.',
      'Gaining hands-on experience through coursework, practical labs, and individual projects.',
      'Actively exploring areas like Full Stack Development, System Design, and Agile Methodologies.'
    ],
    type: 'education'
  },
  {
    id: '3',
    title: 'Higher National Diploma in Information Technology',
    company: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
    period: '2022 - 2025',
    description: [
      'Pursuing the HNDIT program, designed to provide strong foundational and practical knowledge in Information Technology.',
      'Covered key subjects including Programming, Data Structures, Software Engineering, Web Development, Networking, and Database Management.',
      'Engaged in team-based software development projects, presentations, and academic research.',
      'Actively involved in improving skills in both front-end and back-end development through coursework and self-directed learning.'
    ],
    type: 'education'
  },
  {
    id: '4',
    title: 'Full Stack Web Development',
    company: 'Developers Stack',
    period: 'Following',
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
  { name: 'HTML', category: 'Frontend', icon: 'HTML5.svg', level: 95 },
  { name: 'CSS', category: 'Frontend', icon: 'CSS3.svg', level: 90 },
  { name: 'JavaScript', category: 'Frontend', icon: 'JavaScript.svg', level: 80 },
  { name: 'React', category: 'Frontend', icon: 'React.svg', level: 90 },
  { name: 'TypeScript', category: 'Frontend', icon: 'TypeScript.svg', level: 85 },
  { name: 'Angular', category: 'Frontend', icon: 'Angular.svg', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind.svg', level: 85 },
  { name: 'Node.js', category: 'Frontend', icon: 'Node.js.svg', level: 75 },
  { name: 'Spring Boot', category: 'Backend', icon: 'Spring.svg', level: 85 },
  { name: 'Java', category: 'Backend', icon: 'Java.svg', level: 90 },
  { name: 'Node.js', category: 'Backend', icon: 'Node.js.svg', level: 75 },
  { name: 'MySQL', category: 'Backend', icon: 'MySQL.svg', level: 80 },
  { name: 'IntelliJ IDEA', category: 'Tools', icon: 'IntelliJ IDEA.svg', level: 85 },
  { name: 'Git', category: 'Tools', icon: 'Git.svg', level: 85 },
  { name: 'Docker', category: 'Tools', icon: 'Docker.svg', level: 70 },
  { name: 'AWS', category: 'Tools', icon: 'AWS.svg', level: 65 },
  { name: 'Clean Code', category: 'Concepts', icon: 'clean.png', level: 90 },
  { name: 'System Design', category: 'Concepts', icon: 'systemdesign.png', level: 75 },
  { name: 'Agile', category: 'Concepts', icon: 'agile.png', level: 80 }
];