import React from 'react';
import { Link } from 'react-router-dom';
//import config from '../config';
import PlanApiService from '../services/plan-api-services.js';
import PlanItem from '../PlanItem/PlanItem.js';
import PlanContext from '../PlanContext.js';

export default class FullLessons extends React.Component{
    state={
        plans:[]
    }
    componentDidMount(){
        //get all the plans from the DB
        PlanApiService.getPlans()
        .then(planData => {
            this.setState({
                plans: planData
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    
    render(){
    
        const planContextValue = { plans : this.state.plans }
        const plansToRender= this.state.plans.map((plan, i) => (<PlanItem {...plan} key={plan.id} />))

        if (this.props.match.path === '/main'){
        console.log('******** STATE!', this.state)
        console.log('planContextValue', planContextValue)
        console.log('******** PROPS!', this.props)
        return(
            <>
            <PlanContext.Provider value={planContextValue}>
                <section>
                    <header>
                      <h2>Plans</h2>
                    </header>
                    <div>
                       {plansToRender}
                    </div>
                    <Link to='newlesson'>
                        <button type='button' >Add Lesson</button>
                    </Link>
                </section>
            </PlanContext.Provider>
            </>
        )
    }else{
        //console.log('*********** plans.folder_id', plans.folder_id)
        console.log('************** props in full lesson filtered', this.props)
        const planContextValue = { plans : this.state.plans }
        const plansFiltered = this.state.plans.filter(plans =>
                plans.folder_id === +this.props.match.params.folderId)
        const plansToRender= plansFiltered.map((plan,i) => (<PlanItem {...plan} key={plan.id} />))
        return(
            <>
            <PlanContext.Provider value={planContextValue}>
                <section>
                    <header>
                      <h2>Plans</h2>
                    </header>
                    <div>
                       {plansToRender}
                    </div>
                    <Link to='newlesson'>
                        <button type='button' >Add Lesson</button>
                    </Link>
                </section>
            </PlanContext.Provider>
            </>
        )
    }
    
}

}