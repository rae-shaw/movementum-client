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
    postPlan(text) {
        return fetch(`${config.API_ENDPOINT}/plan`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                //add other body here
                text,
            }),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
    //patchPlan
    //add patch here
    //deletePlan
    //add delete here
}

export default PlanApiService