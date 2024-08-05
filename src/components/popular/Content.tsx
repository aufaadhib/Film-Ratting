import React, { useEffect, useState } from 'react';
import { getMovieList } from '../../api/MovieList';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const baseImgUrl = process.env.REACT_APP_BASEIMGURL;

interface Movie {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const Content: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const limitText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const PopularMoviesList: React.FC = () => {
    return (
      <>
        {popularMovies.map((movie, i) => (
          <motion.div
            key={i}
            className="duration-500 shadow-lg bg-blue-600/20 rounded-xl ring-1 hover:scale-105 dark:bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center justify-between h-full px-3 py-7">
              <div className="text-xl text-center font-bebas-neue lg:text-5xl">
                {movie.title}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={`${baseImgUrl}${movie.poster_path}`}
                  alt={movie.title}
                  className="items-center w-40 rounded-md"
                />
                <div className="flex items-center space-x-2 font-semibold">
                  <div className="text-yellow-500">
                    <FaStar />
                  </div>
                  <div>{movie.vote_average}</div>
                </div>
              </div>
              <div>{limitText(movie.overview, 120)}</div>
            </div>
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <div className="pt-24">
      <div className="grid justify-center grid-cols-2 gap-5 px-2 lg:px-36 lg:grid-cols-4">
        <PopularMoviesList />
      </div>
    </div>
  );
};

export default Content;
