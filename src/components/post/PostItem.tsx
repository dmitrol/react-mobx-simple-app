import { IPost } from '../../types';
import { Link } from 'react-router-dom';

interface IProps {
  post: IPost;
}

const PostItem: React.FC<IProps> = ({ post }) => {
  return (
    <Link to={`/posts/` + post.id} className="table-row">
      <div className="post-1">{post.title}</div>
      <div className="post-2">{post.body}</div>
    </Link>
  );
};

export { PostItem };
