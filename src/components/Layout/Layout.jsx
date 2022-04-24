/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import NavbarComp from "../Navbar/NavbarComp"

function Layout({ children, pageTitle }) {
	const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
	useEffect(() => {
		document.title =
			title === "Pokepedia" ? `${title} ` : `${title} | Pokepedia`
	}, [pageTitle])
	return (
		<>
			<NavbarComp />
			<main>{children}</main>
		</>
	)
}

export default Layout
