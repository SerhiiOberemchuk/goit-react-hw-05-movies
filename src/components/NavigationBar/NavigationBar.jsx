import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <div className=" navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/movie">
              Movie
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
