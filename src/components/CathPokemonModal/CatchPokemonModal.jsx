import React from "react"
import {
	Modal,
	ModalContent,
	ModalImage,
	ModalInputName,
	ModalInputNameContainer,
	ModalTitle,
	ModalButton,
} from "../../style/components/CatchPokemonModal/CatchPokemonModal"
import PokeballImage from "../../img/pokeball.png"
import FootstepImage from "../../img/footsteps.png"

function CatchPokemonModal({
	isOpen,
	setModalCatch,
	success,
	setSuccess,
	pokemonName,
	name,
	setPokemonName,
	handleSave,
	errorInput,
	setErrorInput,
}) {
	const handleInputPokemon = e => {
		setPokemonName(e.target.value)
		setErrorInput(null)
	}
	return (
		<Modal isOpen={isOpen}>
			<ModalContent>
				{success ? (
					<ModalTitle>Yeay, Successful got {name}!</ModalTitle>
				) : (
					<ModalTitle>Huft, Failed! The {name} has ran away.</ModalTitle>
				)}
				{success ? (
					<>
						<ModalImage src={PokeballImage} alt="pokeballopen" />
						<ModalInputNameContainer>
							<ModalInputName
								type="text"
								onChange={handleInputPokemon}
								value={pokemonName}
								placeholder={`Give a nickname to your ${name}!`}
							/>
						</ModalInputNameContainer>
						{errorInput ? <p style={{ color: "red" }}>{errorInput}</p> : null}
						<ModalButton onClick={handleSave}>SAVE TO POKEBALL</ModalButton>
					</>
				) : (
					<>
						<ModalImage src={FootstepImage} />
						<ModalButton
							onClick={() => {
								setModalCatch(false)
								setSuccess(false)
							}}
						>
							BACK
						</ModalButton>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default CatchPokemonModal
