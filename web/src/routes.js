import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
