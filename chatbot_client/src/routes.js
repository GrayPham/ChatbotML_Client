import { Navigate, useRoutes } from 'react-router-dom';
// layouts

import LoginPage from './page/LoginTest/LoginPage';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/logintest',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
