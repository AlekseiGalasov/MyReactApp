import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Styles/GlobalStyle.js';
import { NavBar } from './Components/NavBar/NavBar.js';
import { Menu } from './Components/Menu/Menu.js';
import { ModalItem } from './Components/Modal/ModalItem.js';
import { Order } from './Components/Order/Order.js';
import { useOpenItem } from './Components/Hooks/useOpenitem.js';
import { useOrders } from './Components/Hooks/useOrders.js'
import { useAuth } from './Components/Hooks/useAuth'
import { useTitle } from './Components/Hooks/useTitle'
import { OrderConfirm } from './Components/Order/OrderConfirm'
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm'
import { useThanks } from './Components/Hooks/useThanks'
import { Thanks } from './Components/Modal/Thanks'
import { Context } from './Components/Functions/context'


const firebaseConfig = {
	apiKey: "AIzaSyDoCLd_t1BApCzZj81epfELyqqTWWcDgBE",
	authDomain: "mcdonalds-ce46e.firebaseapp.com",
	databaseURL: "https://mcdonalds-ce46e.firebaseio.com",
	projectId: "mcdonalds-ce46e",
	storageBucket: "mcdonalds-ce46e.appspot.com",
	messagingSenderId: "629877144804",
	appId: "1:629877144804:web:32252874cac558a9d740f1",
	measurementId: "G-XB3EWHTR88"
  };

  firebase.initializeApp(firebaseConfig);

function App() {



	const auth = useAuth(firebase.auth);
	const openItem = useOpenItem();
	const orders = useOrders();
	const orderConfirm = useOrderConfirm()
	useTitle(openItem.openItem);
	const thanks = useThanks()
	
	return (
		<Context.Provider value={{
			auth,
			openItem,
			orderConfirm,
			orders,
			thanks,
			firebaseDatabase: firebase.database,
		}}>
		<GlobalStyle />
		<NavBar/>
		<Order/>
		<Menu/>
		{openItem.openItem && <ModalItem/>}
		{orderConfirm.openOrderConfirm && <OrderConfirm/>}
		{thanks.thanks && <Thanks />}
		</Context.Provider>
	);
}

export default App;
