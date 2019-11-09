import './App.css';
import React from 'react';
import AddFolder from './AddFolder/AddFolder.js';
import AddLesson from './AddLesson/AddLesson.js';
import FullFolders from './FullFolders/FullFolders.js';
import FullLessons from './FullLessons/FullLessons.js';
import LoginPage from './LoginPage/LoginPage.js';
import SingleFolder from './SingleFolder/SingleFolder.js';
import SingleLesson from './SingleLesson/SingleLesson.js';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
        <div className='mainSection'>
            <section className='sidebar'>
            <Router>
                <Switch>
                    <Route exact path='/' component = {FullFolders}/> 
                    <Route path='/addfolder' component = {AddFolder}/>
                    <Route path='/main' component={FullFolders} />
                    <Route path='/newlesson' component = {FullFolders}/>
                    <Route path='/lesson/:lessonId' component = {SingleFolder}/>
                    <Route path='/main/:folderId' component = {FullFolders} />
                </Switch>
            </Router>
            </section>
            <main className='main'>
                <Switch>
                    <Route exact path='/' component = {LoginPage} />
                    <Route path='/addfolder' component={FullLessons} />
                    <Route path='/main' component={FullLessons} />
                    <Route path='/newlesson' component = {AddLesson}/>
                    <Route path='/lesson/:lessonId' component = {SingleLesson} />
                    <Route path='/main/:folderId' component = {FullLessons}/>
                </Switch>
            </main>
        </div>
        
    </>
  );
}

export default App;
