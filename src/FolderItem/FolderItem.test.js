import React from 'react';
import ReactDOM from 'react-dom';
import FolderItem from './FolderItem';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><FolderItem /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});