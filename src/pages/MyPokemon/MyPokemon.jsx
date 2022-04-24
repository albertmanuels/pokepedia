import React, { useContext, useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { PokemonContext } from "../../context/PokemonContext"
import Lottie from "react-lottie"
import pokeball from "../../img/animations/pokeball.json"
import { LoadingContainer } from "../../style/components/Loading/LoadingStyle"
import { UpdateMyPokemonsStore } from "../../utils/pokemonStore"
import {
	Card,
	CardTitle,
	NumberLabel,
	CardContainer,
	CardsContainer,
} from "../../style/components/Card/CardStyle"
import { Title } from "../../style/templates/HomePage/HomePageStyle."
import { Link } from "react-router-dom"
import {
	ButtonBack,
	ButtonReleasePokemon,
	ButtonReleasePokemonContainer,
	MyPokemonName,
} from "../../style/templates/MyPokemon/MyPokemonStyle"
import { useToasts } from "react-toast-notifications"

function MyPokemon() {
	const { myPokemons } = useContext(PokemonContext)
	const [nickname, setNickname] = useState(null)
	const [loading, setLoading] = useState(false)
	const myPokemonsArr = Object.values(myPokemons)
	const { addToast } = useToasts()

	useEffect(() => {
		setLoading(false)
		setNickname(null)
	}, [nickname])

	const handleRelease = nickname => {
		setLoading(true)
		delete myPokemons[nickname]
		UpdateMyPokemonsStore(myPokemons)
		setNickname(nickname)

		addToast("Success Release Pokemon", {
			appearance: "success",
			autoDismiss: true,
		})
	}

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: pokeball,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}

	return (
		<Layout pageTitle="My Pokemon">
			<Title>My Pokemon List</Title>
			{loading ? (
				<LoadingContainer>
					<Lottie options={defaultOptions} width={150} height={150} />
					<p>Loading...</p>
				</LoadingContainer>
			) : myPokemonsArr.length === 0 ? (
				<CardsContainer display="inline-block" textAlign="center">
					<h3>You don't have any Pokemon in your Pokeball </h3>
					<Link to="/">
						<ButtonBack>Let's catch some pokemon!</ButtonBack>
					</Link>
				</CardsContainer>
			) : (
				<>
					<CardsContainer>
						{myPokemonsArr?.map((poke, idx) => (
							<Card key={idx}>
								<CardContainer>
									<Link to={`/pokemon/${poke.id}/${poke.name}`}>
										<NumberLabel>{++idx}</NumberLabel>
										<img
											src={poke.image}
											alt="pokemon img"
											width={150}
											height={150}
										/>
										<CardTitle>{poke.nickname}</CardTitle>
										<MyPokemonName>({poke.name})</MyPokemonName>
									</Link>
									<ButtonReleasePokemonContainer>
										<ButtonReleasePokemon
											type="button"
											onClick={() => handleRelease(poke.nickname)}
										>
											Release
										</ButtonReleasePokemon>
									</ButtonReleasePokemonContainer>
								</CardContainer>
							</Card>
						))}
					</CardsContainer>
				</>
			)}
		</Layout>
	)
}

export default MyPokemon
