import styled from "@emotion/styled"

export const CardsContainer = styled.div(
	({ display, textAlign }) => `
display: ${display === "inline-block" ? "inline-block" : "flex"};
text-align: ${textAlign === "center" ? "center" : "start"};
justify-content: center;
flex-flow: row wrap;
width: 100%;
`
)
export const Card = styled.div`
	display: flex;
	height: auto;
	border-radius: 15px;
	background-color: #fdfaf1ed;
	margin: 16px;
	text-align: center;
`

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	padding: 16px;
	max-width: 192px;
	width: 100%;
	overflow: hidden;
	position: relative;
	&:hover {
		border-radius: 12px;
		transform: matrix(1.1, 0, 0, 1.1, 0, 2);
		transition: 250ms ease;
		background-color: #fdfaf1ed;
		cursor: pointer;
	}

	@media (max-width: 576px) {
		max-width: 163px;
	}
`

export const CardTitle = styled.h3`
	margin: 0;
	text-transform: capitalize;
	font-weight: 600;
`

export const OwnedLabel = styled.div`
	text-align: center;
	width: 100%;
	margin-top: 3px;
	padding: 15px;
	border-radius: 5px;
	font-size: 0.8rem;
	font-weight: bold;
	background-color: #de9400;
`

export const NumberLabel = styled.div`
	background-color: #f6bd20;
	border-radius: 15px 0px 10px 0px;
	padding: 5px 10px;
	position: absolute;
	font-weight: bold;
	top: 0;
	left: 0;
`
