import React from 'react';
import ReactDOM from 'react-dom';
import SingleFolder from './SingleFolder';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const location = { state: {plan: {folder_id:5}}}
	ReactDOM.render(<Router><SingleFolder location={location} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});