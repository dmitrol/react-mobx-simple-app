import { makeAutoObservable } from 'mobx';
import { IComment, IPost } from '../types';

class PostStore {
  posts: IPost[] = [];
  perPage: number = 10;
  totalCount: number = 0;
  totalPages: number = 1;
  post: IPost | null = null;
  comments: IComment[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  *getPostById(postId: number) {
    this.setLoading(true);
    yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        return response.json();
      })
      .then((data: IPost) => {
        this.setPost(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  *getPosts(page: number = 1) {
    this.setLoading(true);
    yield fetch(
      `https://jsonplaceholder.typicode.com/posts?_per-page=${this.perPage}&_page=${page}`
    )
      .then((response) => {
        const res = response.headers.get('x-total-count');
        if (res) {
          this.setTotalCount(+res);
        }
        return response.json();
      })
      .then((data: IPost[]) => {
        this.setPosts(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }
  *getComments(postId: number) {
    this.setLoading(true);
    yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        return response.json();
      })
      .then((data: IComment[]) => {
        this.setComments(data);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  setPost(post: IPost) {
    this.post = post;
  }
  setPosts(posts: IPost[]) {
    this.posts = posts;
  }
  setComments(comments: IComment[]) {
    this.comments = comments;
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

export const postStore = new PostStore();
