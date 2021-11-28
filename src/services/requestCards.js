import { api } from './api';

export default {
    get:(page) => {
        return api.get(`/cards?_page=${page}&_limit=4`)
    },
    post:(data) => {
        return api.post('/cards', data)
    }
}