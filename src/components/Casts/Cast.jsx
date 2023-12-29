import { getActorsDetails } from 'Services/movies-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Cast = () => {
  const [movieActors, setMovieActors] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoadaing] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoadaing(true);
    const movieCasts = async () => {
      try {
        const response = await getActorsDetails(id);
        setMovieActors(response.cast);
        !response.cast.length ? setIsError(true) : setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoadaing(false);
      }
    };
    movieCasts();
  }, [id]);
  // const defaultImg =
  //   'https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div className="my-3">
      {isLoading && <ReactLoading type="spin" color="black" />}
      {movieActors.length > 0 && (
        <ul>
          {movieActors.map(({ name, id, profile_path, character }) => (
            <li key={id} className="py-3">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
                className="mb-2"
              />
              <h4 className="mb-2">{name}</h4>
              <h5>Character: {character}</h5>
            </li>
          ))}
        </ul>
      )}
      {isError && <div>We don`t have casts for this movie</div>}
    </div>
  );
};
export default Cast;
