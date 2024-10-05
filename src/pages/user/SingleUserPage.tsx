import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { userStore } from '../../stores/UserStore';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AppLoader } from '../../components/UI/loader/AppLoader';

const SingleUserPage: React.FC = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      userStore.getUserById(+id);
    }
  }, [id]);

  return (
    <div>
      {userStore.loading ? (
        <AppLoader></AppLoader>
      ) : (
        <>
          <div className="data-section">
            <div className="title">User General</div>
            <div className="section-row">
              <span>name: </span>
              <span>{userStore.user?.name}</span>
            </div>
            <div className="section-row">
              <span>username: </span>
              <span>{userStore.user?.username}</span>
            </div>
            <div className="section-row">
              <span>email: </span>
              <span>{userStore.user?.email}</span>
            </div>
            <div className="section-row">
              <span>phone: </span>
              <span>{userStore.user?.phone}</span>
            </div>
            <div className="section-row">
              <span>website: </span>
              <span>{userStore.user?.website}</span>
            </div>
          </div>

          <div className="data-section">
            <div className="title">Address</div>
            <div className="section-row">
              <span>city: </span>
              <span>{userStore.user?.address.city}</span>
            </div>
            <div className="section-row">
              <span>street: </span>
              <span>{userStore.user?.address.street}</span>
            </div>
            <div className="section-row">
              <span>suite: </span>
              <span>{userStore.user?.address.suite}</span>
            </div>
          </div>

          <div className="data-section">
            <div className="title">Company</div>
            <div className="section-row">
              <span>name: </span>
              <span>{userStore.user?.company.name}</span>
            </div>
            <div className="section-row">
              <span>catchPhrase: </span>
              <span>{userStore.user?.company.catchPhrase}</span>
            </div>
            <div className="section-row">
              <span>bs: </span>
              <span>{userStore.user?.company.bs}</span>
            </div>
          </div>

          <div>
            <Link to="/users">Show all users</Link>
          </div>
        </>
      )}
    </div>
  );
});

export { SingleUserPage };
