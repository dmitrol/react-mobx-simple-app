import { IFilter } from '../types';

export const changeFilter = (
  filter: IFilter,
  setFilter: (filter: IFilter) => void,
  field: string
) => {
  const result = { ...filter };
  if (field === filter.field) {
    if (result.method === 'ASC') {
      result.method = 'DESC';
    } else if (result.method === 'DESC') {
      result.method = '';
    } else {
      result.method = 'ASC';
    }
  } else {
    result.field = field;
    result.method = 'ASC';
  }
  setFilter(result);
};

export const iconClasses = (filter: IFilter, field: string): string => {
  const classes: string[] = ['icon'];
  if (field === filter.field) {
    if (filter.method === 'ASC') {
      classes.push('icon-asc');
    } else if (filter.method === 'DESC') {
      classes.push('icon-desc');
    }
  }
  return classes.join(' ');
};
