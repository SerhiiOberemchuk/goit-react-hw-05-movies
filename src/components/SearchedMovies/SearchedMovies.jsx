import { searchMovie } from 'components/Services/movies-service';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SearchedMovies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      setMovie([]);
      return;
    }
    const getMovie = async () => {
      try {
        const response = await searchMovie(query);
        if (response.results.length > 0) {
          setMovie(response.results);
        } else {
          alert(`No movies found for ${query}`);
          setMovie([]);
        }
      } catch (error) {
        alert(error);
      }
    };
    getMovie();
  }, [query]);

  return (
    <div>
      <ul>
        {movie.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movie/${id}`} state={{ from: `/movie?query=${query}` }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedMovies;
