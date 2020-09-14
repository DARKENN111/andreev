import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Start from './panels/Start';
import Select from './panels/Select';
import Target from './panels/Target_fee';
import Regular from './panels/Regular_fee';
import More from './panels/More';

import './panels/App.css';


const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact><Start/></Route>
				<Route path="/Select" exact><Select/></Route>
				<Route path="/Target" exact><Target/></Route>
				<Route path="/Regular" exact><Regular/></Route>
				<Route path="/More" exact><More/></Route>
			</Switch>
		</Router>
	);
}

export default App;
