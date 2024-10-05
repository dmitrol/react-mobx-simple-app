import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h5>not found page</h5>
      <Link to="posts">go to posts</Link>
    </div>
  );
};

export { NotFoundPage };
