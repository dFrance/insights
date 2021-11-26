import { api } from './api';

export default {
    get:() => {
        return api.get('/cards')
    },
    post:(data) => {
        return api.post('/cards', data)
    }
}