import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IFilter } from '../../types';
import { useSortedUsers } from '../../hooks/useSortedUsers';
import { UserList } from '../../components/user/UserList';
import { AppPagination } from '../../components/UI/pagination/AppPagination';
import { userStore } from '../../stores/UserStore';
import { AppLoader } from '../../components/UI/loader/AppLoader';

const UsersPage: React.FC = observer(() => {
  const [filter, setFilter] = useState<IFilter>({ field: '', method: '' });
  const [page, setPage] = useState<number>(1);

  const { users } = userStore;
  const sortedUsers = useSortedUsers(users, filter);

  useEffect(() => {
    userStore.getUsers();
  }, []);

  return (
    <div>
      {userStore.loading ? (
        <AppLoader></AppLoader>
      ) : (
        <div>
          <div className="user-list">
            <UserList
              title="User list"
              users={sortedUsers}
              filter={filter}
              setFilter={(filter) => setFilter(filter)}
            ></UserList>
          </div>
          {userStore.totalPages > 1 && (
            <div className="pagination-content">
              <AppPagination
                totalPage={userStore.totalPages}
                page={page}
                changePage={(page) => setPage(page)}
              ></AppPagination>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export { UsersPage };
