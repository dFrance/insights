import { api } from './api';

export default {
    get:(page, limit) => {
        return api.get(`/cards?page=${page}&limit=${limit}`)
    },
    post:(data) => {
        return api.post('/cards', data)
    }
}