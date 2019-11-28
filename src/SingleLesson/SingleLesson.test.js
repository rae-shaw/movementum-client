import React from 'react';
import ReactDOM from 'react-dom';
import SingleLesson from './SingleLesson';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const match = { params: {folderId:5}}
	const location = { state: {plan: {folder_id:5}}}
	ReactDOM.render(<Router><SingleLesson match={match} location={location} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});