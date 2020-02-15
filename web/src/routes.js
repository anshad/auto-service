import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Slots = React.lazy(() => import('./views/Slots'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/slots', name: 'Slots', component: Slots }
];

export default routes;
