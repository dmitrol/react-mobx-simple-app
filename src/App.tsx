import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PostsPage } from './pages/post/PostsPage';
import { UsersPage } from './pages/user/UsersPage';
import { SinglePostPage } from './pages/post/SinglePostPage';
import { SingleUserPage } from './pages/user/SingleUserPage';
import { Layout } from './layouts/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to="posts" replace={true}></Navigate>}
          />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<SingleUserPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
