import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/prabansha', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prabansha', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/prabansha', label: 'Twitter' },
    { icon: Mail, href: 'mailto:prabansha@example.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                Prabansha Dissanayake
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Junior Software Engineer passionate about creating innovative digital solutions. 
                Specializing in full-stack development with modern technologies.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon size={18} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p>Colombo, Sri Lanka</p>
              <a
                href="mailto:prabansha@example.com"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                prabansha@example.com
              </a>
              <a
                href="tel:+94771234567"
                className="block hover:text-purple-400 transition-colors duration-300"
              >
                +94 77 123 4567
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Prabansha Dissanayake. All rights reserved.
          </p>
          
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 flex items-center gap-2 text-center md:text-right"
          >
            Designed & Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>{' '}
            by Prabansha Dissanayake
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8
              }}
              className={`absolute w-1 h-1 bg-gradient-to-r ${
                i % 2 === 0 ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600'
              } rounded-full`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 10}%`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;