import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail"
import MyPokemon from "../pages/MyPokemon/MyPokemon"
export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route
					path="/pokemon/:id/:pokename"
					element={<PokemonDetail />}
					exact
				/>
				<Route path="/mypokemon" element={<MyPokemon />} exact />
			</Routes>
		</BrowserRouter>
	)
}
