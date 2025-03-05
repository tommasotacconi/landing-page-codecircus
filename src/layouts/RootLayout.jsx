import Routes from "../routes";

export default function RootLayout() {
	return (
		<>
			<h1>Header</h1>
			<Routes>
				<main>Contenuto pagina</main>
			</Routes>
			<footer>
				<h1>Footer</h1>
			</footer>
		</>
	);
}