import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><Header /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});