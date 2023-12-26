import { getMovieDetails } from 'components/Services/movies-service';
import { Suspense, useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const TrendMovie = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [overview, setOverview] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [genres, setGenres] = useState([]);
  const [vote_average, setVoteAverage] = useState('');

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const response = await getMovieDetails(id);
        if (response) {
          const { poster_path, overview, title, name, genres, vote_average } =
            response;

          if (poster_path) {
            const imageUrl = `https://image.tmdb.org/t/p/w400/${poster_path}`;
            setImageUrl(imageUrl);
          }
          setOverview(overview);
          setName(name);
          setTitle(title);
          setGenres(genres);
          setVoteAverage(vote_average);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchMovieInfo();
  }, [id]);

  return (
    <div className=" mt-3">
      <Link
        to={location.state?.from || '/'}
        className="icon-link icon-link-hover"
      >
        <GoArrowLeft className="bi" />
        Go back
      </Link>
      <div className=" d-flex  py-3 border-bottom">
        <img src={imageUrl} alt={name || title} className="me-4" width={400} />
        <div>
          <h2>{title || name}</h2>
          <p>User Score: {(vote_average * 10).toFixed(0)} %</p>
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : <p>No information</p>}
          <h3>Genres</h3>
          {genres.length ? (
            <ul>
              {genres.map(({ id, name }) => {
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
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={{ from: location.state?.from }}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default TrendMovie;
