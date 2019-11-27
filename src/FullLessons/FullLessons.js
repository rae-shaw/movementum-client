import React from 'react';
import { Link } from 'react-router-dom';
//import config from '../config';
import PlanApiService from '../services/plan-api-services.js';
import PlanItem from '../PlanItem/PlanItem.js';
//import PlanContext from '../PlanContext.js';

export default class FullLessons extends React.Component{

    state={
        plans:[]
    }

    componentDidMount(){
        //get all the plans from the DB
        PlanApiService.getPlans()
        .then(planData => {
            this.setState({
                plans: planData,
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    
    render(){
        const plansToRender= this.state.plans.map((plan, i) => (<PlanItem {...plan} handleUpdate={this.props.handleUpdate} plans={this.state.plans} key={plan.id} />))
        
        if (this.props.match.path === '/main'){
        console.log('******** STATE!', this.state.plans)
        console.log('******** PROPS!', this.props)
        return(
            <section className ='plansSection'>
                <section>
                    <header>
                      <h2>Plans</h2>
                    </header>
                    <div >
                       {plansToRender}
                    </div>
                    <Link to='/newlesson'>
                        <button type='button' >Add Lesson</button>
                    </Link>
                </section>
            </section>
        )
    }else{
        console.log('******** STATE! in else', this.state.plans)
        console.log('******** PROPS!', this.props)
        const plansFiltered = this.state.plans.filter(plans =>
                plans.folder_id == +this.props.match.params.folderId)
        const plansToRender= plansFiltered.map((plan,i) => (<PlanItem {...plan} plans={plansFiltered} key={plan.id} />))
        console.log('********plans to render in else', plansToRender)
        console.log('********plans filtered in else', plansFiltered)
        return(
            <section className ='plansSection'>
                <section >
                    <header>
                      <h2>Plans</h2>
                    </header>
                    <div >
                       {plansToRender}
                    </div>
                    <Link to='/newlesson'>
                        <button type='button'>Add Lesson</button>
                    </Link>
                </section>
            </section>
        )
    }
    
}

}