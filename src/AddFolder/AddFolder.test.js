import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from './AddFolder';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><AddFolder /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});