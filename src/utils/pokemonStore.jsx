export async function StoreMyPokemons() {
	return localStorage.getItem("my-pokemon")
		? JSON.parse(localStorage.getItem("my-pokemon"))
		: []
}

export function UpdateMyPokemonsStore(mypokemons) {
	localStorage.setItem("my-pokemon", JSON.stringify(mypokemons))
}
