import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';

const Layout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div>
        <div className="container">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
