import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle.js'
import { NavBar } from './Components/NavBar.js';
import { Menu } from './Components/Menu.js';
import { ModalItem } from './Components/Modal.js';
import { Order } from './Components/Order.js';



function App() {

	const [openItem, setOpenItem] = React.useState(null);
	
	return (
		<>
		<GlobalStyle />
		<NavBar />
        <Order />
		<Menu setOpenItem={setOpenItem}/>
		<ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
		</>
	);
}

export default App;
