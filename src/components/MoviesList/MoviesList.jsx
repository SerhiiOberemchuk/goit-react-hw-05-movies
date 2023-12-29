import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ arrey, query }) => {
  const location = useLocation();
  return (
    <ul>
      {arrey.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={`/movie/${id}`}
            state={{
              from: query ? `/movie?query=${query}` : location.pathname,
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
