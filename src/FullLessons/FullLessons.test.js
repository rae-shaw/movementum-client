import React from 'react';
import ReactDOM from 'react-dom';
import FullLessons from './FullLessons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const match = { path: '/main'}
	ReactDOM.render(<Router><FullLessons match={match} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	const match = { params: {folderId:5}}
	ReactDOM.render(<Router><FullLessons match={match} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});