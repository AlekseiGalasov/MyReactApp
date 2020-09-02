import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	body {
		margin: 0;
		background-color: #f0f0f0;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		color: black;		
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	h1, h2, h3 {
		padding: 0;
		margin: 0;
		font-family: 'Balsamiq Sans', cursive;
	
	}
	p {
		margin: 0;
		padding: 0;
	}

	input {
		padding: 0 10px;
		&:focus {
			outline: none;
		}
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	button {
		cursor: pointer;
	&:focus {
		outline: none;
	}
	&:active {
		background-color: red;
	}
	}
`