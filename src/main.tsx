import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { FormSimulatorPage } from './pages/form/FormSimulatorPage.tsx';
import { ResultSimulatorPage } from './pages/result/ResultSimulatorPage';

const router = createBrowserRouter([
  { path: '/', element: <FormSimulatorPage /> },
  { path: '/results', element: <ResultSimulatorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
