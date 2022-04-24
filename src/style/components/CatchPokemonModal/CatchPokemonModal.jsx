import styled from "@emotion/styled"

export const Modal = styled.div(
	({ isOpen }) => `
  display: ${isOpen ? "block" : "none"};
  position: fixed;
  z-index: 999; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`
)

export const ModalContent = styled.div(
	({ theme }) => `
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  text-align: center;
  transition: 250ms ease;
  animation: 0.2s infinite ease-in alternate;
  border-radius: 10px;
  @media (min-width: 960px) {
    width:450px;
  }
  @media (max-width: 960px) {
    width:90%;
  }
`
)

export const ModalTitle = styled.h2`
	color: black;
`

export const ModalImage = styled.img`
	width: 100px;
	height: 100px;
	margin-bottom: 20px;
`
export const ModalInputNameContainer = styled.div`
	display: flex;
	justify-content: center;
`
export const ModalInputName = styled.input`
	width: 100%;
	padding: 15px;
	border: none;
	box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
	font-weight: bold;
	margin-bottom: 20px;
`

export const ModalButton = styled.button`
	width: 100%;
	padding: 15px 20px;
	color: white;
	background-color: #f6bd20;
	border: none;
	cursor: pointer;
	font-weight: bold;
`
