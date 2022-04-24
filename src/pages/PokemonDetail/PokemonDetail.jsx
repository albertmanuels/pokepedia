import grphql from "../../graphql"
import React, { useContext, useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { GET_DETAIL_POKEMONS } from "../../graphql/queries"
import { useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { UpdateMyPokemonsStore } from "../../utils/pokemonStore"
import Lottie from "react-lottie"
import pokeball from "../../img/animations/pokeball.json"
import {
	PokemonDetailContainer,
	PokemonDetailProfileLeft,
	PokemonDetailProfileLeftList,
	PokemonDetailImage,
	PokemonDetailProfileRight,
	PokemonDetailName,
	MovesItem,
	DetailTypes,
	DetailsContainer,
	DetailValues,
	DetailAbility,
	CatchButtonContainer,
	CatchButton,
	PokeBallImg,
	CatchButtonText,
	PokemonDetailProfileRightContainer,
} from "../../style/templates/PokemonDetail/PokemonDetailStyle"
import { LoadingContainer } from "../../style/components/Loading/LoadingStyle"
import CatchPokemonModal from "../../components/CathPokemonModal/CatchPokemonModal"

import PokeballImage from "../../img/pokeball.png"
import { Title } from "../../style/templates/HomePage/HomePageStyle."
import { useToasts } from "react-toast-notifications"

function PokemonDetail() {
	const [result, setResult] = useState({})
	const [modalCatch, setModalCatch] = useState(false)
	const [success, setSuccess] = useState(false)
	const [errorInput, setErrorInput] = useState(null)
	const [pokemonName, setPokemonName] = useState("")
	const { myPokemons, setMyPokemons } = useContext(PokemonContext)
	const [pokeImage, setPokeImage] = useState(null)
	const [loading, setLoading] = useState(true)
	const { addToast } = useToasts()

	// Get id and pokename from params
	const router = useParams()
	const { id, pokename } = router

	const fetchData = async name => {
		const { data } = await grphql.query({
			query: GET_DETAIL_POKEMONS,
			variables: { name: name },
		})
		return data
	}

	const getData = async () => {
		try {
			const data = await fetchData(pokename)
			if (data?.pokemon?.id) {
				setResult(data?.pokemon)
				setPokeImage(data?.pokemon?.sprites?.front_default)
				setLoading(false)
			} else {
				setLoading(false)
			}
		} catch (err) {
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	const handleCatchButton = () => {
		const isCatch = Math.random() < 0.5 ? true : false

		if (isCatch) {
			setSuccess(true)
			setModalCatch(true)
		} else {
			setSuccess(false)
			setModalCatch(true)
		}
	}

	const handleSavePokemon = () => {
		if (pokemonName === "") {
			setErrorInput("You have to give a nickname to your pokemon!")
		} else {
			if (myPokemons[pokemonName]) {
				setErrorInput("This pokemon's nickname already exist!")
			} else {
				const detailPokemon = {
					id: id,
					name: pokename,
					image: result?.sprites?.front_default,
					nickname: pokemonName,
				}
				setMyPokemons(state => ({
					...state,
					[pokemonName]: detailPokemon,
				}))
				UpdateMyPokemonsStore({ ...myPokemons, [pokemonName]: detailPokemon })
				addToast("Success Save Pokemon", {
					appearance: "success",
					autoDismiss: true,
				})
				setModalCatch(false)
				setPokemonName("")
				setSuccess(false)
			}
		}
	}

	// Pokemon Image Animations
	useEffect(() => {
		const timer = setInterval(() => {
			if (pokeImage === result?.sprites?.front_default) {
				setPokeImage(result?.sprites?.back_default)
			} else {
				setPokeImage(result?.sprites?.front_default)
			}
		}, 3000)

		return () => clearInterval(timer)
	})

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: pokeball,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}

	return (
		<Layout pageTitle={pokename}>
			<CatchPokemonModal
				isOpen={modalCatch}
				setModalCatch={setModalCatch}
				success={success}
				setSuccess={success}
				pokemonName={pokemonName}
				setPokemonName={setPokemonName}
				name={result?.name}
				handleSave={handleSavePokemon}
				errorInput={errorInput}
				setErrorInput={setErrorInput}
			/>
			<Title>Pokemon Details</Title>

			{loading ? (
				<LoadingContainer>
					<Lottie options={defaultOptions} width={150} height={150} />
					<p>Loading...</p>
				</LoadingContainer>
			) : (
				<>
					<PokemonDetailContainer>
						<PokemonDetailProfileLeft>
							<PokemonDetailImage src={pokeImage} alt={result?.name} />
							<PokemonDetailProfileLeftList>
								<PokemonDetailName>{result?.name}</PokemonDetailName>
								<CatchButtonContainer>
									<CatchButton onClick={handleCatchButton}>
										<PokeBallImg src={PokeballImage} />
										<CatchButtonText>Catch</CatchButtonText>
									</CatchButton>
								</CatchButtonContainer>
								<DetailsContainer>
									<h3>Types: </h3>
									<DetailValues>
										{result?.types.map(item => (
											<DetailTypes type={item?.type?.name}>
												{item?.type?.name}
											</DetailTypes>
										))}
									</DetailValues>
								</DetailsContainer>

								<DetailsContainer>
									<h3>Abilities: </h3>
									<DetailValues>
										{result?.abilities.map(item => (
											<DetailAbility>{item?.ability?.name}</DetailAbility>
										))}
									</DetailValues>
								</DetailsContainer>
							</PokemonDetailProfileLeftList>
						</PokemonDetailProfileLeft>
						<PokemonDetailProfileRight>
							<h3>Moves:</h3>
							<PokemonDetailProfileRightContainer>
								{result?.moves?.map(item => (
									<MovesItem>{item?.move?.name}</MovesItem>
								))}
							</PokemonDetailProfileRightContainer>
						</PokemonDetailProfileRight>
					</PokemonDetailContainer>
				</>
			)}
		</Layout>
	)
}

export default PokemonDetail
