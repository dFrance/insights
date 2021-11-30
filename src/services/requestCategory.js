import { api } from '../config/api';

export default {
    get:() => {
        return api.get('/category')
    }
}