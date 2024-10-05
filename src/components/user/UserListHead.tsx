import { changeFilter, iconClasses } from '../../helpers/filter';
import { IFilter } from '../../types';

interface IProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const UserListHead: React.FC<IProps> = ({ filter, setFilter }) => {
  return (
    <div className="table-header">
      <div
        className="user-1"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'name')}
      >
        <span>name</span>
        <div className={iconClasses(filter, 'name')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div
        className="user-2"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'surname')}
      >
        <span>surname</span>
        <div className={iconClasses(filter, 'surname')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div
        className="user-3"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'email')}
      >
        <span>email</span>
        <div className={iconClasses(filter, 'email')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export { UserListHead };
