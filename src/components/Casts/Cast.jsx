import { getActorsDetails } from 'components/Services/movies-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieActors, setMovieActors] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const movieCasts = async () => {
      try {
        const response = await getActorsDetails(id);
        setMovieActors(response.cast);
      } catch (error) {
        alert(error);
      }
    };
    movieCasts();
  }, [id]);
  return (
    <div className="my-3">
      {movieActors.length ? (
        <ul>
          {movieActors.map(({ name, id, profile_path, character }) => (
            <li key={id} className="py-3">
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
                alt={name}
                height={300}
                className="mb-2"
              />

              <h4 className="mb-2">{name}</h4>
              <h5>Character: {character}</h5>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don`t have casts for this movie</div>
      )}
    </div>
  );
};
export default Cast;