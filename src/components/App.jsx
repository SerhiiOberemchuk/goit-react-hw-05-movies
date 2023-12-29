import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const MoviesPage = lazy(() => import('../pages/MoviesPages'));
const Layout = lazy(() => import('./Layout/Layout'));
const HomePages = lazy(() => import('../pages/HomePages'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Review = lazy(() => import('./Review/Review'));
const Cast = lazy(() => import('./Casts/Cast'));

export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="movie" element={<MoviesPage />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Review />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
