import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences } from '../data/portfolio.tsx';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-blue-600';
      case 'education':
        return 'from-green-500 to-green-600';
      case 'certification':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, educational background, and continuous learning path in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800" />

          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const Icon = getIcon(experience.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Timeline Item */}
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                    >
                      {/* Connector Arrow */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 ${
                          isEven ? '-right-4' : '-left-4'
                        } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                          isEven
                            ? 'border-l-8 border-l-white dark:border-l-gray-800'
                            : 'border-r-8 border-r-white dark:border-r-gray-800'
                        }`}
                      />

                      {/* Period Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${getColor(
                          experience.type
                        )} text-white text-sm font-semibold rounded-full mb-4`}
                      >
                        {experience.period}
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {experience.company}
                      </h4>

                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 + itemIndex * 0.1 }}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-2">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Timeline Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`relative z-10 w-16 h-16 bg-gradient-to-r ${getColor(
                      experience.type
                    )} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 bg-gradient-to-r ${getColor(
                        experience.type
                      )} rounded-full`}
                    />
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
                className={`absolute w-2 h-2 bg-gradient-to-r ${
                  i % 3 === 0
                    ? 'from-blue-400 to-blue-600'
                    : i % 3 === 1
                    ? 'from-purple-400 to-purple-600'
                    : 'from-green-400 to-green-600'
                } rounded-full`}
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i * 8)}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;