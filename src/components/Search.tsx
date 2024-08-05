import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { searchMovie } from '../api/MovieList';
import Content from './popular/Content';

const Search: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  

  const toggleSearch = () => {
    setSearchVisible((prevVisible) => !prevVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSearchVisible(false);
    }
  };

  const setSearchMovie = async (q: string) => {
    if (q.length>3){
      const query = await searchMovie(q)
      console.log({query:query})
      // setPopularMovies(query.result)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center" ref={searchRef}>
      {/* Search Input */}
      <AnimatePresence>
        {searchVisible && (
          <motion.div 
          initial={{ width: 150, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          exit={{ width: 150, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="mr-3"
          >
            <input type="text" 
            className='px-2 py-1 bg-gray-200 rounded-md dark:text-black' 
            placeholder='Judul Film'
            onChange={
              ({target}) => setSearchMovie(target.value)
            }/>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Button */}
      <div className='space-x-3 text-2xl font-bold lg:block'>
        <motion.button onClick={toggleSearch}>
          <CiSearch />
        </motion.button>
      </div>
    </div>
  );
};

export default Search;


