import styled from "@emotion/styled"

export const ButtonReleasePokemonContainer = styled.div`
	display: flex;
	align-items: center;
`
export const ButtonReleasePokemon = styled.button`
	cursor: pointer;
	border: none;
	text-align: center;
	width: 100%;
	transition: 250ms ease;
	padding: 15px;
	border-radius: 5px;
	background-color: red;
	font-size: 0.8rem;
	font-weight: bold;
	color: black;
	filter: grayscale(0%);
	&:hover {
		filter: grayscale(50%);
	}
`

export const ButtonBack = styled.button`
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	width: max-content;
	padding: 7px 10px;
	color: black;
	background-color: #de9400;
`

export const MyPokemonName = styled.h5`
	text-transform: capitalize;
`
