import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { postStore } from '../../stores/PostStore';
import { PostList } from '../../components/post/PostList';
import { IFilter } from '../../types';
import { useSortedPosts } from '../../hooks/useSortedPosts';
import { AppPagination } from '../../components/UI/pagination/AppPagination';
import { AppLoader } from '../../components/UI/loader/AppLoader';

const PostsPage: React.FC = observer(() => {
  const [filter, setFilter] = useState<IFilter>({ field: '', method: '' });
  const [page, setPage] = useState<number>(1);

  const sortedPosts = useSortedPosts(postStore.posts, filter);

  useEffect(() => {
    postStore.getPosts();
  }, []);

  const changePage = async (page: number) => {
    await postStore.getPosts(page);
    setPage(page);
  };

  return (
    <div>
      {postStore.loading ? (
        <AppLoader />
      ) : (
        <div>
          <div>
            <PostList
              title="post list"
              posts={sortedPosts}
              filter={filter}
              setFiler={(filter) => setFilter(filter)}
            ></PostList>
          </div>
          <div className="pagination-content">
            {postStore.totalPages > 1 && (
              <AppPagination
                page={page}
                totalPage={postStore.totalPages}
                changePage={changePage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export { PostsPage };
