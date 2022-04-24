import { css, Global } from "@emotion/react"

export const GlobalStyles = (
	<Global
		styles={css`
			* {
				box-sizing: border-box;
			}
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: "Poppins", sans-serif;
				width: 100%;
				height: 100%;
			}

			main {
				width: 100%;
				max-width: 1400px;
				margin: auto;
			}

			a {
				color: black;
				text-decoration: none;
			}
		`}
	/>
)
