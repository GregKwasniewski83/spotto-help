import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ScreenPage from './pages/ScreenPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'screen/:screen',
        element: <ScreenPage />,
      },
      {
        path: 'article/:slug',
        element: <ArticlePage />,
      },
      {
        path: 'getting-started',
        element: <Navigate to="/screen/home" replace />, // Placeholder
      },
      {
        path: 'glossary',
        element: <Navigate to="/" replace />, // Placeholder
      },
      {
        path: 'troubleshooting',
        element: <Navigate to="/screen/troubleshooting" replace />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
