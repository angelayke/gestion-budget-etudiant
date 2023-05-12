import { DefaultSort } from './filters.interface';

export interface UserConfig {
  _id: string;
  defaultSort: DefaultSort;
  defaultDateFilter: 'month' | 'week';
  user: string;
}
