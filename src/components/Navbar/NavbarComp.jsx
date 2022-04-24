import React from "react"
import { Link } from "react-router-dom"
import {
	Navbar,
	NavBrand,
	NavLink,
	NavMenu,
} from "../../style/components/NavbarComp/NavbarStyle"
import PokeBallImage from "../../img/pokeball.png"
import ExploreImage from "../../img/explore.png"
function NavbarComp() {
	return (
		<Navbar>
			<NavBrand>
				<Link to="/">POKEPEDIA</Link>
			</NavBrand>

			<NavLink>
				<Link to="/">
					<NavMenu>
						<img src={ExploreImage} width={40} height={40} alt="explore" />
						<h5>Explore</h5>
					</NavMenu>
				</Link>
				<Link to="/mypokemon">
					<NavMenu>
						<img src={PokeBallImage} width={40} height={40} alt="pokeball" />
						<h5>My Pokemon</h5>
					</NavMenu>
				</Link>
			</NavLink>
		</Navbar>
	)
}

export default NavbarComp
