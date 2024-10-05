import { changeFilter, iconClasses } from '../../helpers/filter';
import { IFilter } from '../../types';

interface IProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const PostListHeader: React.FC<IProps> = ({ filter, setFilter }) => {
  return (
    <div className="table-header">
      <div
        className="post-1"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'title')}
      >
        <span>title</span>
        <div className={iconClasses(filter, 'title')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div
        className="post-2"
        title="click to filter"
        onClick={() => changeFilter(filter, setFilter, 'body')}
      >
        <span>body</span>
        <div className={iconClasses(filter, 'body')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export { PostListHeader };
