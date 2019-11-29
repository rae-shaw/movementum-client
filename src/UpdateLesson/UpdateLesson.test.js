import React from 'react';
import ReactDOM from 'react-dom';
import UpdateLesson from './UpdateLesson';
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const location = {state: {plan: {id:5}} }
	ReactDOM.render(<Router intialEntries={['/']}><UpdateLesson location={location} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});