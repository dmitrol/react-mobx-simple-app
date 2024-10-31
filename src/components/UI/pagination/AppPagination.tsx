import { getPageArray } from '../../../helpers/pages';

interface IProps {
  page: number;
  totalPage: number;
  changePage: (page: number) => void;
}

const AppPagination: React.FC<IProps> = ({ page, totalPage, changePage }) => {
  const { startItem, items, endItem } = getPageArray(page, totalPage, 5);

  const prev = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };

  const next = () => {
    if (page < totalPage) {
      changePage(page + 1);
    }
  };

  return (
    <div className="pagination-wrapper">
      <span
        className={
          page == startItem ? 'pagination-item disabled' : 'pagination-item'
        }
        onClick={prev}
      >
        &lt;
      </span>
      <span
        className={
          page == startItem ? 'pagination-item active' : 'pagination-item'
        }
        onClick={() => changePage(startItem)}
      >
        {startItem}
      </span>
      {items[0] != 2 && <span className="separator">...</span>}
      {items.map((item) => (
        <span
          key={item}
          className={
            item === page ? 'pagination-item active' : 'pagination-item'
          }
          onClick={() => changePage(item)}
        >
          {item}
        </span>
      ))}
      {items[items.length - 1] != totalPage - 1 && (
        <span className="separator">...</span>
      )}
      <span
        className={
          page == endItem ? 'pagination-item active' : 'pagination-item'
        }
        onClick={() => changePage(endItem)}
      >
        {endItem}
      </span>
      <span
        className={
          page == endItem ? 'pagination-item disabled' : 'pagination-item'
        }
        onClick={next}
      >
        &gt;
      </span>
    </div>
  );
};

export { AppPagination };
