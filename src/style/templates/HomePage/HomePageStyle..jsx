import styled from "@emotion/styled"

export const Title = styled.h1`
	text-align: center;
	text-transform: capitalize;
`

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const Button = styled.button`
	color: #fff;
	background: #f6bd20;
	cursor: pointer;
	border: 0;
	border-radius: 10px;
	margin: 16px;
	padding: 16px;
	font-weight: bold;
	box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	&:hover {
		transform: matrix(1, 0, 0, 1, 0, 2);
		transition: 250ms ease;
	}
`
