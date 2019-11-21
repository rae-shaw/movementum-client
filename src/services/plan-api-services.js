import TokenService from '../services/token-service'
import config from '../config'

const PlanApiService = {
    getPlans() {
        return fetch(`${config.API_ENDPOINT}/plan`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getPlan(planId) {
        return fetch(`${config.API_ENDPOINT}/plan/${planId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    //need to work on this one
    postPlan(newPlan) {
        return fetch(`${config.API_ENDPOINT}/plan`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newPlan),
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        }
        )
    },
    patchPlan(updatedFields){
        return fetch(`${config.API_ENDPOINT}/plan/${this.props.match.params.folderId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedFields),
            headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
            },
        })
        .then( () => {
            this.props.history.push(`/main`)
        })
        .catch(error => {
            console.error({ error })
        });
    }
    //patchPlan
    //add patch here
    //deletePlan
    //add delete here
}

export default PlanApiService