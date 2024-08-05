import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeSwitch: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Cek preferensi pengguna di local storage
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
      }
      return newMode;
    });
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="sr-only peer"
      />
      <div className="relative flex items-center w-16 h-8 p-1 bg-gray-200 rounded-full cursor-pointer dark:bg-gray-800">
        <motion.div
          className={`flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md absolute transform transition-transform duration-300 ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.div
            className={`flex items-center justify-center absolute ${darkMode ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: darkMode ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="text-gray-700" />
          </motion.div>
          <motion.div
            className={`flex items-center justify-center absolute ${darkMode ? 'opacity-0' : 'opacity-100'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: darkMode ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className="text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>
    </label>
    


  );
};

export default DarkModeSwitch;
