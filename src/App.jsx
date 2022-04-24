import { useEffect, useMemo, useState } from "react"
import grphql from "./graphql"
import { GlobalStyles } from "./style/globalStyle"
import { ApolloProvider } from "@apollo/client"
import { PokemonContext } from "./context/PokemonContext"
import { StoreMyPokemons, UpdateMyPokemonsStore } from "./utils/pokemonStore"
import { Router } from "./Router/router"

import { ToastProvider } from "react-toast-notifications"

function App() {
	const [myPokemons, setMyPokemons] = useState([])

	const data = useMemo(
		() => ({
			myPokemons,
			setMyPokemons,
		}),
		[myPokemons, setMyPokemons]
	)

	useEffect(() => {
		StoreMyPokemons().then(data => {
			setMyPokemons(data)
			UpdateMyPokemonsStore(data)
		})
	}, [])

	return (
		<>
			{GlobalStyles}

			<ToastProvider autoDismissTimeout={2000} autoDismiss={true}>
				<ApolloProvider client={grphql}>
					<PokemonContext.Provider value={data}>
						<Router />
					</PokemonContext.Provider>
				</ApolloProvider>
			</ToastProvider>
		</>
	)
}

export default App
