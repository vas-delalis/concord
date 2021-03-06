import { useState } from 'react';
import { useRoutes, Navigate, Outlet } from 'react-router-dom';
import { Landing, Home, NotFound } from 'features/misc';
import { MainLayout } from 'components/layout';
import { Groups } from 'features/groups';

const App = () => {
  const [filters, setFilters] = useState({
    activities: [],
  });

  return (
    <MainLayout>
      <Outlet context={[filters, setFilters]}></Outlet>
    </MainLayout>
  )
}

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Landing /> },
    { path: '/auth/*', element: null },
    {
      path: '/app',
      element: <App />,
      children: [
        { path: '', element: <Home /> },       
        { path: 'groups', element: <Groups /> },
        { path: 'lfg', element: null },
        { path: 'search', element: null },
        { path: 'inbox', element: null },
        { path: 'profile', element: null },
        { path: '*', element: <Navigate to="." /> } // If no subroute matches, redirect to /app
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);

  return <>{routes}</>;
};