import { getTrending } from 'Services/movies-service';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { MoviesList } from 'components/MoviesList/MoviesList';

const HomePages = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [errorInfo, setErrorInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const respData = await getTrending();
      setTrendingMovies(respData.results);
      !respData.results ? setErrorInfo(true) : setErrorInfo(false);
    } catch (error) {
      setErrorInfo(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>{' '}
      {isLoading && <ReactLoading type="spin" color="black" />}
      {trendingMovies.length > 0 && <MoviesList arrey={trendingMovies} />}
      {errorInfo && <h3>Something went wrong ....</h3>}
    </div>
  );
};
export default HomePages;
