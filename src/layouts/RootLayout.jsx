import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
	return (
		<>
			{/* Header */}
			<header>
				<h1>Header</h1>
				<nav>
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/contacts">Contacts</NavLink></li>
					</ul>
				</nav>
			</header>

			{/* Main contents */}
			<main>
				<Outlet />
			</main>
			{/* Footer */}
			<footer>
				<h1>Footer</h1>
			</footer>
		</>
	);
}