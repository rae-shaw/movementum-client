
import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddFolder from './AddFolder/AddFolder.js';
import AddLesson from './AddLesson/AddLesson.js';
import FullFolders from './FullFolders/FullFolders.js';
import FullLessons from './FullLessons/FullLessons.js';
import LandingPage from './LandingPage/LandingPage.js';
import SingleFolder from './SingleFolder/SingleFolder.js';
import SingleLesson from './SingleLesson/SingleLesson.js';
import Registration from './Registration/Registration.js';
import './App.css';


class App extends React.Component{
    render(){
        
        return (
        <>
            <div className='mainSection'>
            <Router>
                <section className='sidebar'>
                
                    <Switch>
                        <Route path='/addfolder' component = {FullFolders}/>
                        <Route exact path='/main' component={FullFolders} />
                        <Route path='/newlesson' component = {FullFolders}/>
                        <Route path='/lesson/:lessonId' component = {SingleFolder}/>
                        <Route path='/main/:folderId' component = {FullFolders} />
                    </Switch>
             
                </section>
                <main className='main'>

                    <Switch>
                        <Route exact path='/' component = {LandingPage} />
                        <Route path='/addfolder' component={AddFolder} />
                        <Route exact path='/main' component={FullLessons} />
                        <Route path='/newlesson' component = {AddLesson}/>
                        <Route path='/lesson/:lessonId' component = {SingleLesson} />
                        <Route path='/main/:folderId' component = {FullLessons}/>
                        <Route path='/registration' componenet={Registration}/>
                    </Switch>
                </main>
                </Router>
            </div>

            
        </>
      );
    }
}

export default App;
