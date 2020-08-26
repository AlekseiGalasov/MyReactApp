import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle.js'
import { NavBar } from './Components/NavBar.js';
import { Menu } from './Components/Menu.js';



function App() {
	return (
		<>
		<GlobalStyle />
		<NavBar />
		<Menu />
		</>
	);
}

export default App;
