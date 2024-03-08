import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/styles.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, PrivacyPage, TermsPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/terms-and-conditions',
    element: <TermsPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPage />,
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
