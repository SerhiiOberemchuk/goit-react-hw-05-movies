import { lazy } from 'react';
const SearchMovie = lazy(() => import('../SearchMovie/SearchMovie'));

const MoviesPage = () => {
  return (
    <div>
      <SearchMovie />
    </div>
  );
};
export default MoviesPage;
