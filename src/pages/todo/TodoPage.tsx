import { observer } from 'mobx-react-lite';
import { todoStore } from '../../stores/TodoStore';
import { useEffect, useState } from 'react';
import { IFilter } from '../../types';
import { AppLoader } from '../../components/UI/loader/AppLoader';
import { TodoList } from '../../components/todo/TodoList';
import { AppPagination } from '../../components/UI/pagination/AppPagination';
import { useSortedTodos } from '../../hooks/useSortedTodos';

const TodoPage: React.FC = observer(() => {
  const [filter, setFilter] = useState<IFilter>({ field: '', method: '' });
  const [page, setPage] = useState<number>(1);

  const sortedTodos = useSortedTodos(todoStore.todoList, filter);

  useEffect(() => {
    todoStore.getAllTodo();
  }, []);

  const changePage = async (page: number) => {
    await todoStore.getAllTodo(page);
    setPage(page);
  };

  return (
    <div>
      {todoStore.loading ? (
        <AppLoader />
      ) : (
        <div>
          <div>
            <TodoList
              title="post list"
              totoItems={sortedTodos}
              filter={filter}
              setFiler={(filter) => setFilter(filter)}
            ></TodoList>
          </div>
          <div className="pagination-content">
            {todoStore.totalPages > 1 && (
              <AppPagination
                page={page}
                totalPage={todoStore.totalPages}
                changePage={changePage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export { TodoPage };
