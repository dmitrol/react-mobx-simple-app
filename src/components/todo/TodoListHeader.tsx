import { changeFilter, iconClasses } from '../../helpers/filter';
import { IFilter } from '../../types';

interface IProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const TodoListHeader: React.FC<IProps> = ({ filter, setFilter }) => {
  return (
    <div className="table-header">
      <div
        className="todo-1"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'title')}
      >
        <span>title</span>
        <div className={iconClasses(filter, 'title')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div className="todo-2">
        <span>status</span>
        <div className={iconClasses(filter, 'completed')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export { TodoListHeader };
