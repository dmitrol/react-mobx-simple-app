import { makeAutoObservable } from 'mobx';
import { IUser } from '../types';

class UserStore {
  users: IUser[] = [];
  perPage: number = 10;
  totalCount: number = 0;
  totalPages: number = 1;
  user: IUser | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  *getUsers(page: number = 1) {
    this.setLoading(true);
    yield fetch(
      `https://jsonplaceholder.typicode.com/users?_per-page=${this.perPage}&_page=${page}`
    )
      .then((response) => {
        const res = response.headers.get('x-total-count');
        if (res) {
          this.setTotalCount(+res);
        }
        return response.json();
      })
      .then((data: IUser[]) => {
        this.setUsers(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  *getUserById(userId: number) {
    this.setLoading(true);
    yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data: IUser) => {
        this.setUser(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }
  setUser(user: IUser) {
    this.user = user;
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }
  setTotalCount(value: number) {
    this.totalCount = value;
    this.setTotalPages();
  }
  setTotalPages() {
    this.totalPages = Math.ceil(this.totalCount / this.perPage);
  }
  setLoading(value: boolean) {
    this.loading = value;
  }
}
export const userStore = new UserStore();
