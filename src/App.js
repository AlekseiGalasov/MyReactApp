import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { NavBar } from './Components/NavBar.js';

const GlobalStyle = createGlobalStyle`
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
		font-family: 'Bangers', sans-serif;
		
	}
`

function App() {
	return (
		<>
		<GlobalStyle />
		<NavBar />
		</>
	);
}

export default App;
