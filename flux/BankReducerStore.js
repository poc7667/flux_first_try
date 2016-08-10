import {ReduceStore} from 'flux/utils';
import AppDispatcher from './Dispatcher';

class BankReducerStore extends ReduceStore {
    getInitialState() {
        return 0;
    }
    
    reduce(state, action) {
        switch (action.type) {
            case 'CREATE_ACCOUNT':
                return action.payload.amount;
            case 'DEPOSIT_INTO_ACCOUNT':
                return state + action.payload.amount;
            case 'WITHDRAW_FROM_ACCOUNT':
                return state - action.payload.amount;
            default:
                return state;
        }
    }
}

export default new BankReducerStore(AppDispatcher);