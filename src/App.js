
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
import UpdateLesson from './UpdateLesson/UpdateLesson.js';
import Header from './Header/Header'
import './App.css';


class App extends React.Component{
    state ={
        loggedIn: false
    }

    static defaultProps = {
        history: {
          push: () => { }
        },
    }

    handleLogin = () => {
        this.setState({ loggedIn: true })
    }
    handleLogout = () => {
        this.setState({ loggedIn: false })
    }
    render(){
        
        return (
        <>
            <header className='App__header'>
                <Header handleLogout={this.handleLogout}/>
            </header>
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
                        <Route exact path='/' render={props => 
                            (<LandingPage {...props} handleLogin={this.handleLogin} />)
                        }/>
                        <Route path='/addfolder' component={AddFolder} />
                        <Route exact path='/main' component={FullLessons} />
                        <Route path='/newlesson' component = {AddLesson}/>
                        <Route path='/lesson/:lessonId' component = {SingleLesson} />
                        <Route path='/main/:folderId' component = {FullLessons}/>
                        <Route path='/update-lesson/:lessonId' component={UpdateLesson}/>
                        <Route path='/registration' component={Registration}/>
                    </Switch>
                </main>
                </Router>
            </div>

            
        </>
      );
    }
}

export default App;
