import React from 'react';
import { GlobalStyle } from './Components/Styles/GlobalStyle.js'
import { NavBar } from './Components/NavBar/NavBar.js';
import { Menu } from './Components/Menu/Menu.js';
import { ModalItem } from './Components/Modal/Modal.js';
import { Order } from './Components/Order/Order.js';
import { useOpenItem } from './Components/Hooks/useOpenitem.js';
import { useOrders } from './Components/Hooks/useOrders.js'

function App() {

	const openItem = useOpenItem();
	const orders = useOrders();


	return (
		<>
		<GlobalStyle />
		<NavBar />
        <Order {...orders} />
		<Menu {...openItem}/>
		{openItem.openItem && <ModalItem {...openItem} {...orders}></ModalItem>}
		</>
	);
}

export default App;
