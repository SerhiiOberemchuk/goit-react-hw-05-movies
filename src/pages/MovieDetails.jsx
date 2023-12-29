import { getMovieDetails } from 'Services/movies-service';
import { Suspense, useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [errorInfo, setErrorInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieDetails(id);
        setMovieDetails(response);
      } catch (error) {
        setErrorInfo(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieInfo();
  }, [id]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className=" mt-3">
      <Link
        to={location.state?.from || '/'}
        className="icon-link icon-link-hover"
      >
        <GoArrowLeft className="bi" />
        Go back
      </Link>
      {isLoading && <ReactLoading type="spin" color="black" />}
      {errorInfo && <h3>Something went wrong ....</h3>}

      {movieDetails && (
        <div>
          <div className=" d-flex  py-3 border-bottom">
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.name || movieDetails.title}
              className="me-4"
              width={400}
            />
            <div>
              <h2>{movieDetails.title || movieDetails.name}</h2>
              <p>User Score: {(movieDetails.vote_average * 10).toFixed(0)} %</p>
              <h3>Overview</h3>
              {movieDetails.overview ? (
                <p>{movieDetails.overview}</p>
              ) : (
                <p>No information</p>
              )}
              <h3>Genres</h3>
              {movieDetails.genres.length ? (
                <ul>
                  {movieDetails.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              ) : (
                <p>No information</p>
              )}
            </div>
          </div>
          <div className="border-bottom pt-3">
            <h4>Addittional information</h4>
            <ul>
              <li>
                <Link
                  to="cast"
                  state={{ from: location.state?.from }}
                  // state={{ from: location.state?.from || location.pathname }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="review"
                  state={{ from: location.state?.from }}
                  // state={{ from: location.state?.from || location.pathname }}
                >
                  Review
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
