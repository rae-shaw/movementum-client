import React from 'react';
import { Link } from 'react-router-dom';
import PlanContext from '../PlanContext.js';
import FolderApiService from '../services/folder-api-services.js';

export default class SingleLesson extends React.Component{
    static contextType = PlanContext;

    state = {
        folder: {}
    }

    componentDidMount(){
        FolderApiService.getFolder(this.props.location.state.plan.folder_id)
        .then(singleFolderData => {
            this.setState({
                folder: singleFolderData
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    render(){
        console.log('props in single lesson', this.props)
        console.log('state in single lesson', this.state)

        const plan = this.props.location.state.plan
            return(
                <>
                    <nav role="navigation">Nav</nav>
                    <main role="main">
                        <header>
                            <h1>{this.state.folder.name}</h1>
                            <h2>{plan.name}</h2>
                            <h3>{plan.class_date}</h3>
                        </header>
                        <section>
                            <div className="class-section">
                                <h4>Warm-Up</h4>
                                <p>{plan.warm_up}</p>
                            </div>
                            <div className="class-section">
                                <h4>Skills</h4>
                                <p>{plan.skills}</p>
                            </div>
                            <div className="class-section">
                                <h4>Notes for Next Class</h4>
                                <p>{plan.notes}</p>
                            </div>
                            <div className="class-section">
                                <h4>Student Notes</h4>
                                <p>{plan.students}</p>
                            </div>
                            <Link to='/main'>
                                <button>Edit</button>
                            </Link>
                            <Link to ='/main'>
                                <button>Delete</button>
                            </Link>
                        </section>
                    </main>
                    <footer role="content-info">Footer</footer>
                </>
            )
        }
    }