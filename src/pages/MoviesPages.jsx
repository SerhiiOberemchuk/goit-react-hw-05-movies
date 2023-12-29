import { searchMovie } from 'Services/movies-service';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const MoviesPage = () => {
  const [query, setValueInput] = useState('');
  const [movie, setMovie] = useState([]);
  const [errorInfo, setErrorInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  useEffect(() => {
    const getMovie = async () => {
      if (searchQuery) {
        setIsLoading(true);
        try {
          const response = await searchMovie(searchQuery);
          setMovie(response.results.length > 0 ? response.results : []);
          !response.results.length ? setErrorInfo(true) : setErrorInfo(false);
        } catch (error) {
          setErrorInfo(true);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getMovie();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      alert('Please write a search word');
      setMovie([]);
      setSearchParams('');
      setErrorInfo(false);
      return;
    }
    setSearchParams({ query: cleanQuery });
    setValueInput('');
  };

  const onChange = e => setValueInput(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group my-3">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Write the name of the movie"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={query}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading && <ReactLoading type="spin" color="black" />}
      {movie.length > 0 && <MoviesList arrey={movie} query={searchQuery} />}
      {errorInfo && <h3>Something went wrong ....</h3>}
    </div>
  );
};
export default MoviesPage;
