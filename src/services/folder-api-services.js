import TokenService from '../services/token-service'
import config from '../config'

const FolderApiService = {
    getFolders() {
        return fetch(`${config.API_ENDPOINT}/folder`, {
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
    getFolder(folderId) {
        return fetch(`${config.API_ENDPOINT}/folder/${folderId}`, {
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
    postFolder(folder) {
        console.log('IN FOLDER SERVICE*********')
        return fetch(`${config.API_ENDPOINT}/folder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(folder),
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
    }
}

export default FolderApiService