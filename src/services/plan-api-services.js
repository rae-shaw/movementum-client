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
        })
    },
    patchPlan(updatedFields){
        return fetch(`${config.API_ENDPOINT}/plan/${updatedFields.id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedFields),
            headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
            },
        })
    },
    deletePlan(planId) {
        return fetch(`${config.API_ENDPOINT}/plan/${planId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
        })
        .then(res => {
            if (!res.ok)
                    throw new Error()
                return
        })
    }
}

export default PlanApiService