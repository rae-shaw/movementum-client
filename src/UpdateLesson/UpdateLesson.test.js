import React from 'react';
import ReactDOM from 'react-dom';
import UpdateLesson from './UpdateLesson';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const state = {plan: {id:5}} 
	ReactDOM.render(<Router><UpdateLesson state={state} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});