import styled from "@emotion/styled"

export const Navbar = styled.nav`
	background: white;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 999;
	box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
	transition: 250ms ease;
	margin-bottom: 30px;
	height: 80px;
	display: flex;
	position: relatve;
	padding: 10px 16px;
`

export const NavBrand = styled.div`
	width: 100%;
	height: auto;
	font-family: "Titan One", cursive;
	font-weight: 400;
	font-size: 40px;

	& a {
		color: #f6bd20;
		outline: black;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
	}
	@media (max-width: 960px) {
		font-size: 25px;
	}

	@media (max-width: 576px) {
		font-size: 20px;
	}
`

export const NavLink = styled.div`
	display: flex;
	flex-direction: flex-row;
	align-items: center;
`

export const NavMenu = styled.div`
	width: 100%;
	min-width: 100px;
	text-align: center;
	vertical-align: center;
	& h5 {
		margin: 0;
	}

	@media (max-width: 576px) {
		& img {
			width: 25px;
			height: 25px;
		}
		& h5 {
			font-size: 0.7rem;
		}
	}
`
