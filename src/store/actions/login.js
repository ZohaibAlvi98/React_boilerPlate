import { 
    LOGIN,
} from '../action_type';
import { login } from '../../api/login';

export const customer_login = (params) => ({
    type: LOGIN,
    payload: login(params),
});