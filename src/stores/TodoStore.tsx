import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types';

class TodoStore {
  todoList: ITodo[] = [];
  perPage: number = 10;
  totalCount: number = 0;
  totalPages: number = 1;
  todo: ITodo | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  *getTodoById(todoId: number) {
    this.setLoading(true);
    yield fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => {
        return response.json();
      })
      .then((data: ITodo) => {
        this.setTodo(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  *getAllTodo(page: number = 1) {
    this.setLoading(true);
    yield fetch(
      `https://jsonplaceholder.typicode.com/todos?_per-page=${this.perPage}&_page=${page}`
    )
      .then((response) => {
        const res = response.headers.get('x-total-count');
        if (res) {
          this.setTotalCount(+res);
        }
        return response.json();
      })
      .then((data: ITodo[]) => {
        this.setAllTodo(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  setTodo(todo: ITodo) {
    this.todo = todo;
  }
  setAllTodo(todoList: ITodo[]) {
    this.todoList = todoList;
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

export const todoStore = new TodoStore();
