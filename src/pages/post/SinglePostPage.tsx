import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { postStore } from '../../stores/PostStore';
import { useEffect } from 'react';
import { userStore } from '../../stores/UserStore';
import { AppLoader } from '../../components/UI/loader/AppLoader';

const SinglePostPage: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      postStore.getPostById(+id);
      postStore.getComments(+id);
      if (postStore.post) {
        userStore.getUserById(postStore.post.userId);
      }
    }
  }, [id]);

  return (
    <div>
      {postStore.loading ? (
        <AppLoader />
      ) : (
        <div>
          <div className="post-content">
            <div className="post-id">
              <div className="title">POST ID</div>
              <div>{postStore.post?.id}</div>
            </div>
            <div className="post-title">
              <div className="title">Title</div>
              <div>{postStore.post?.title}</div>
            </div>
            <div className="post-body">
              <div className="title">Body</div>
              <div>{postStore.post?.body}</div>
            </div>
            {userStore.user && (
              <div className="post-user">
                <div className="title">User</div>
                <Link
                  to={userStore.user ? `/users/${userStore.user.id}` : '/users'}
                >
                  {userStore.user?.name} {userStore.user?.username}
                </Link>
              </div>
            )}
          </div>

          <h2>Comments</h2>
          <div>
            {postStore.comments.map((item) => {
              return (
                <div key={item.id} className="comment-item">
                  <div className="comment-title">
                    {item.id} {item.email}
                  </div>
                  <div className="comment-name">{item.name}</div>
                  <div className="comment-body">{item.body}</div>
                </div>
              );
            })}
          </div>
          <Link to="/posts">Show all posts</Link>
        </div>
      )}
    </div>
  );
});

export { SinglePostPage };
