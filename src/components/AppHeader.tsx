import { NavLink } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/posts" className="header-link">
          posts
        </NavLink>
        <NavLink to="/users" className="header-link">
          users
        </NavLink>
        <NavLink to="/about" className="header-link">
          about
        </NavLink>
      </div>
    </header>
  );
};

export { AppHeader };
