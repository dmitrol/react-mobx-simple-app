import { IFilter, IPost } from '../../types';
import { PostItem } from './PostItem';
import { PostListHeader } from './PostListHeader';

interface IProps {
  title: string;
  posts: IPost[];
  filter: IFilter;
  setFiler: (filter: IFilter) => void;
}

const PostList: React.FC<IProps> = ({ title, posts, filter, setFiler }) => {
  return (
    <div>
      {posts.length ? (
        <div>
          <div className="table-title">{title}</div>
          <div className="table">
            <PostListHeader filter={filter} setFilter={setFiler} />
            {posts.map((item) => (
              <PostItem key={item.id} post={item} />
            ))}
          </div>
        </div>
      ) : (
        <div>Empty list</div>
      )}
    </div>
  );
};

export { PostList };
