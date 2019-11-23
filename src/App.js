
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddFolder from './AddFolder/AddFolder.js';
import AddLesson from './AddLesson/AddLesson.js';
import FullFolders from './FullFolders/FullFolders.js';
import FullLessons from './FullLessons/FullLessons.js';
import LandingPage from './LandingPage/LandingPage.js';
import SingleFolder from './SingleFolder/SingleFolder.js';
import SingleLesson from './SingleLesson/SingleLesson.js';
import Registration from './Registration/Registration.js';
import UpdateLesson from './UpdateLesson/UpdateLesson.js';
import LoginOnly from './LoginOnly/LoginOnly.js';
import Header from './Header/Header';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
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
        console.log('****handleLogin called')
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
                        <PrivateRoute path='/addfolder' component = {FullFolders}/>
                        <PrivateRoute exact path='/main' component={FullFolders} />
                        <PrivateRoute path='/newlesson' component = {FullFolders}/>
                        <PrivateRoute path='/lesson/:lessonId' component = {SingleFolder}/>
                        <PrivateRoute path='/main/:folderId' component = {FullFolders} />
                    </Switch>
             
                </section>
                <main className='main'>

                    <Switch>
                        <Route exact path='/' render={props => 
                            (<LandingPage {...props} handleLogin={this.handleLogin} />)
                        }/>
                        <PrivateRoute path='/addfolder' component={AddFolder} />
                        <PrivateRoute exact path='/main' component={FullLessons} />
                        <PrivateRoute path='/newlesson' component = {AddLesson}/>
                        <PrivateRoute path='/lesson/:lessonId' component = {SingleLesson} />
                        <PrivateRoute path='/main/:folderId' component = {FullLessons}/>
                        <PrivateRoute path='/update-lesson/:lessonId' component={UpdateLesson}/>
                        <Route path='/registration' component={Registration}/>
                        <PublicRoute path='/login' render={props => 
                            (<LoginOnly {...props} handleLogin={this.handleLogin} />)
                        }/>
                    </Switch>
                </main>
                </Router>
            </div>

            
        </>
      );
    }
}

export default App;
