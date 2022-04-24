import { ApolloClient, HttpLink, from, InMemoryCache } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphqlErrors }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message }) => {
			console.log(message)
			return null
		})
	}
})
const link = from([
	errorLink,
	new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
])

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
})

export default client
