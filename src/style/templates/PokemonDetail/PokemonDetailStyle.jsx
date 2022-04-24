import styled from "@emotion/styled"

const types = {
	bug: {
		background: "#729f3f",
		color: "white",
	},

	dark: {
		background: "#729f3f",
		color: "white",
	},

	dragon: {
		background: "#f16e57",
		color: "white",
	},

	electric: {
		background: "#f16e57",
		color: "black",
	},

	fairy: {
		background: "#fdb9e9",
		color: "black",
	},

	fighting: {
		background: "#d56723",
		color: "white",
	},

	fire: {
		background: "#fd7d24",
		color: "white",
	},

	flying: {
		background: "#bdb9b8",
		color: "black",
	},

	ghost: {
		background: "#7b62a3",
		color: "white",
	},

	grass: {
		background: "#9ccd51",
		color: "black",
	},

	ground: {
		background: "#ab9842",
		color: "black",
	},

	ice: {
		background: "#51c4e7",
		color: "black",
	},

	normal: {
		background: "#a4acaf",
		color: "black",
	},

	poison: {
		background: "#b97fc9",
		color: "white",
	},

	psychic: {
		background: "#f366b9",
		color: "white",
	},

	rock: {
		background: "#a38c21",
		color: "white",
	},

	steel: {
		background: "#9eb7b8",
		color: "black",
	},

	water: {
		background: "#4592c4",
		color: "white",
	},
}

export const PokemonDetailContainer = styled.div`
	display: flex;
	margin-bottom: 10rem;
	width: 100%;
	flex-direction: row;
	@media (max-width: 960px) {
		padding-bottom: 150px;
		flex-direction: column;
	}
`

export const PokemonDetailProfileLeft = styled.div`
	min-width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;

	text-transform: capitalize;
	@media (max-width: 960px) {
		width: 100%;
	}
`

export const PokemonDetailProfileLeftList = styled.div`
	width: 100%;
	padding-top: 24px;
`

export const PokemonDetailProfileRight = styled.div`
	display: flex;
	flex-flow: column;
	@media (max-width: 960px) {
		padding: 16px;
	}
`

export const PokemonDetailProfileRightContainer = styled.div`
	display: flex;
	flex-flow: row wrap;

	justify-content: flex-start;
	text-transform: capitalize;
`

export const PokemonDetailImage = styled.img`
	height: 200px;
	background-color: whitesmoke;
	border-radius: 15rem;
`

export const PokemonDetailName = styled.h3`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	margin: 0 0 10px;
`

export const MovesItem = styled.div`
	border: none;
	border-radius: 15px;
	padding: 5px 10px;
	box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
	height: max-content;
	margin: 8px 8px 8px 0px;
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const DetailValues = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
`

export const DetailTypes = styled.div(
	({ type }) => `
	color: ${types[type]?.color ?? "black"};
	background-color: ${types[type]?.background ?? "white"};
	border: none;
	border-radius: 15px;
	padding: 5px 10px;
	text-align: center;
	margin-right: 10px;
	height: max-content;
`
)

export const DetailAbility = styled.div`
	color: "black";
	background-color: "white";
	border: none;
	border-radius: 15px;
	padding: 5px 10px;
	text-align: center;
	width: max-content;
	height: max-content;
	margin-right: 10px;
	box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
`

export const CatchButtonContainer = styled.div`
	text-align: center;
`

export const CatchButton = styled.button`
	border: none;
	background: transparent;
	// border-radius: 50%;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		filter: drop-shadow(6px 4px 3px rgba(49, 53, 59, 0.12));
	}
`

export const PokeBallImg = styled.img`
	width: 50px;
	height: 50px;
`

export const CatchButtonText = styled.h4`
	margin: 0;
`
