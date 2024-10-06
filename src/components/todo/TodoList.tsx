import { IFilter, ITodo } from '../../types';
import { TodoItem } from './TodoItem';
import { TodoListHeader } from './TodoListHeader';

interface IProps {
  title: string;
  totoItems: ITodo[];
  filter: IFilter;
  setFiler: (filter: IFilter) => void;
}

const TodoList: React.FC<IProps> = ({ title, totoItems, filter, setFiler }) => {
  return (
    <div>
      {totoItems.length ? (
        <div>
          <div className="table-title">{title}</div>
          <div className="table">
            <TodoListHeader filter={filter} setFilter={setFiler} />
            {totoItems.map((item) => (
              <TodoItem key={item.id} todo={item} />
            ))}
          </div>
        </div>
      ) : (
        <div>Empty list</div>
      )}
    </div>
  );
};

export { TodoList };
