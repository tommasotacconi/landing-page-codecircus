import React from 'react';
import './scss/index.scss';
import RootLayout from './layouts/RootLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes.ts';

function App() {
	const router = createBrowserRouter(routes);

  return (
    <div>
			<RouterProvider router={router} />
    </div>
  );
}

export default App;
