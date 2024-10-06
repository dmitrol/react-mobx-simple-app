import { Link } from 'react-router-dom';
import { ITodo } from '../../types';

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  return (
    <Link to={`/todos/` + todo.id} className="table-row">
      <div className="todo-1">{todo.title}</div>
      <div className="todo-2">{todo.completed? 'completed' : 'not completed' }</div>
    </Link>
  );
};

export { TodoItem };
