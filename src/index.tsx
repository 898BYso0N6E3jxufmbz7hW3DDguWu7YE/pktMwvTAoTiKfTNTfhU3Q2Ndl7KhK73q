import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/styles.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

root.render(<RouterProvider router={router} />);
