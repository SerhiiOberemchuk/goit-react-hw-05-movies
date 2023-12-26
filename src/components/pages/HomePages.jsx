import { getTrending } from 'components/Services/movies-service';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePages = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const fetchTrendingMovies = async () => {
    try {
      const respData = await getTrending();
      setTrendingMovies(respData.results);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movie/${id}`} state={{ from: location.pathname }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePages;
