/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useState } from "react"
import grphql from "../graphql"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { GET_POKEMONS, GET_DETAIL_POKEMONS } from "../graphql/queries"
import { StoreMyPokemons, UpdateMyPokemonsStore } from "../utils/pokemonStore"
import {
	Card,
	CardsContainer,
	CardContainer,
	CardTitle,
	OwnedLabel,
	NumberLabel,
} from "../style/components/Card/CardStyle"
import {
	Button,
	ButtonContainer,
	Title,
} from "../style/templates/HomePage/HomePageStyle."
import { PokemonContext } from "../context/PokemonContext"
import Lottie from "react-lottie"
import pokeball from "../img/animations/pokeball.json"
import { LoadingContainer } from "../style/components/Loading/LoadingStyle"

function HomePage() {
	const [results, setResults] = useState([])
	const [offset, setOffset] = useState(0)
	const [limits, setLimits] = useState(0)
	const [loading, setLoading] = useState(true)
	const [loadingButton, setLoadingButton] = useState(false)
	const { myPokemons } = useContext(PokemonContext)
	const [myPokemonList, setMyPokemonList] = useState([])

	useEffect(() => {
		if (Object.values(myPokemonList).length === limits) {
			setLoading(false)
		}

		setLoadingButton(false)
	}, [myPokemonList])

	async function fetchData(limit, offset) {
		const { data } = await grphql.query({
			query: GET_POKEMONS,
			variables: { limit: limit, offset: offset },
		})

		return data
	}

	async function getData() {
		setLoading(true)
		try {
			const variables = { limit: 12, offset: 0 }
			const data = await fetchData(variables.limit, variables.offset)
			setResults(data?.pokemons?.results)
			setOffset(variables.offset)
			setLimits(variables.limit)
			setLoading(false)
		} catch (err) {
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	const loadData = async () => {
		setLoadingButton(true)
		try {
			const data = await fetchData(limits, offset + 12)
			setOffset(offset + 12)
			setResults(arr => [...arr, ...data?.pokemons?.results])
			setLoadingButton(false)
		} catch (err) {
			setLoadingButton(false)
		}
	}

	useEffect(() => {
		if (results) {
			results?.forEach(pokemon => {
				let countOwned = 0
				Object.values(myPokemons).forEach(myPokemon => {
					if (parseInt(pokemon.id) === parseInt(myPokemon.id)) {
						countOwned++
					}
				})

				setMyPokemonList(state => ({ ...state, [pokemon.id]: countOwned }))
			})
		}
	}, [results])

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: pokeball,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}

	return (
		<Layout pageTitle="Pokepedia">
			<Title>Pokemon List</Title>
			{loading ? (
				<LoadingContainer>
					<Lottie options={defaultOptions} width={150} height={150} />
					<p>Loading...</p>
				</LoadingContainer>
			) : (
				<>
					<CardsContainer>
						{results?.map((poke, idx) => (
							<Card key={idx}>
								<Link to={`/pokemon/${poke.id}/${poke.name}`}>
									<CardContainer>
										<NumberLabel>{poke.id}</NumberLabel>
										<img
											src={poke.image}
											alt="pokemon img"
											width={150}
											height={150}
										/>
										<CardTitle>{poke.name}</CardTitle>
										<OwnedLabel>Owned: {myPokemonList[poke.id]}</OwnedLabel>
									</CardContainer>
								</Link>
							</Card>
						))}
						<br />
						<ButtonContainer>
							{loadingButton ? (
								<LoadingContainer>
									<Lottie options={defaultOptions} width={80} height={80} />
								</LoadingContainer>
							) : (
								<Button onClick={loadData}>Load More</Button>
							)}
						</ButtonContainer>
					</CardsContainer>
				</>
			)}
		</Layout>
	)
}

export default HomePage
