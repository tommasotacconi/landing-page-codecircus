import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';

export default [
  {
		id: 'root-layout',
    path: "/",
    Component: RootLayout,
    children: [
			{
				id: 'home',
				index: true,
				Component: Home
			},
			{
				id: 'contacts',
				path: 'contacts',
				index: false,
				Component: Contacts,
			}
    ],
  },
];
