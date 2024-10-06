import { useMemo } from 'react';
import { IFilter, ITodo } from '../types';

export function useSortedTodos(users: ITodo[], filter: IFilter) {
  const sortedTodos = useMemo(() => {
    if (filter.field !== '' && filter.method !== '') {
      const result = [...users].sort((a, b) => {
        if (filter.method === 'DESC') {
          return b.title.localeCompare(a.title);
        }
        return a.title.localeCompare(b.title);
      });

      return result;
    }
    return users;
  }, [users, filter.field, filter.method]);
  return sortedTodos;
}
