import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { todoStore } from '../../stores/TodoStore';
import { userStore } from '../../stores/UserStore';
import { AppLoader } from '../../components/UI/loader/AppLoader';

const SingleTodoPage: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      todoStore.getTodoById(+id);
      if (todoStore.todo) {
        userStore.getUserById(todoStore.todo.userId);
      }
    }
  }, [id]);

  return (
    <div>
      {todoStore.loading ? (
        <AppLoader />
      ) : (
        <div>
          <div className="todo-content">
            <div className="todo-id">
              <div className="title">TODO ID</div>
              <div>{todoStore.todo?.id}</div>
            </div>
            <div className="todo-title">
              <div className="title">Title</div>
              <div>{todoStore.todo?.title}</div>
            </div>
            <div className="todo-status">
              <div className="title">Status</div>
              <div>
                {todoStore.todo?.completed ? 'completed' : 'not completed'}
              </div>
            </div>
            {userStore.user && (
              <div className="todo-user">
                <div className="title">User</div>
                <Link
                  to={userStore.user ? `/users/${userStore.user.id}` : '/users'}
                >
                  {userStore.user?.name} {userStore.user?.username}
                </Link>
              </div>
            )}
          </div>

          <Link to="/todos">Show all todos</Link>
        </div>
      )}
    </div>
  );
});

export { SingleTodoPage };
