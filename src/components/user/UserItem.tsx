import { Link } from 'react-router-dom';
import { IUser } from '../../types';

interface IProps {
  user: IUser;
}

const UserItem: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <Link to={`/users/` + user.id} className="table-row">
        <div className="user-1">{user.name}</div>
        <div className="user-2">{user.username}</div>
        <div className="user-3">{user.email}</div>
      </Link>
    </>
  );
};

export { UserItem };
