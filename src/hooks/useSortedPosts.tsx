import { useMemo } from 'react';
import { IFilter, IPost } from '../types';

export function useSortedPosts(posts: IPost[], filter: IFilter) {
  const sortedPost = useMemo(() => {
    if (filter.field !== '' && filter.method !== '') {
      const result = [...posts].sort((a, b) => {
        if (filter.field === 'title') {
          if (filter.method === 'DESC') {
            return b.title.localeCompare(a.title);
          }
          return a.title.localeCompare(b.title);
        }

        if (filter.method === 'DESC') {
          return b.body.localeCompare(a.body);
        }
        return a.body.localeCompare(b.body);
      });

      return result;
    }
    return posts;
  }, [posts, filter.field, filter.method]);
  return sortedPost;
}
