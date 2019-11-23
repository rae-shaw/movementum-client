import React from 'react';
import { Link } from 'react-router-dom';
import PlanContext from '../PlanContext.js';
import FolderApiService from '../services/folder-api-services.js';
import PlanApiService from '../services/plan-api-services.js';

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

    handleSubmit = e => {
        e.preventDefault()
        const planId = this.props.match.params.lessonId
        PlanApiService.deletePlan(planId)
        .then(() => {
            this.props.history.push(`/main`)
        })

        .catch(error => {
            console.error({ error })
        })
    }

    render(){
        console.log('props in single lesson', this.props)
        
        const planLink = `/update-lesson/${this.props.match.params.lessonId}`
        console.log('planLink', planLink)

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
                        <form onSubmit={this.handleSubmit}>
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
                            <Link to={{pathname: planLink}}>
                                <button className='buttons'>Edit</button>
                            </Link>
                                <button className='buttons' type="submit">Delete</button>
                        </form>
                    </main>
                    <footer role="contentinfo">Footer</footer>
                </>
            )
        }
    }