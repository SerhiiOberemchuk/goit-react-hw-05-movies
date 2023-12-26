import { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const SearchMovie = () => {
  const [query, setValueInput] = useState('');
  const navigate = useNavigate();
  const onChange = e => {
    setValueInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      alert('Pleause write query');
      setValueInput('');
    }
    navigate(`/movie?query=${query}`);
    setValueInput('');
  };

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
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SearchMovie;
