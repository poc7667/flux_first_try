import {ReduceStore} from 'flux/utils';
import AppDispatcher from './Dispatcher';

class BankReducerStore extends ReduceStore {

    getInitialState() {
        return {
            state: true,
            msg: "",
            balance: 0
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'CREATE_ACCOUNT':
                return Object.assign({}, {
                    state: true,
                    msg: "SUCCESS",
                    balance: action.payload.amount,
                });
            case 'DEPOSIT_INTO_ACCOUNT':
                if (false === Number.isFinite(action.payload.amount)) {
                    return Object.assign({}, {
                        state: false,
                        msg: "The amount should be a number.",
                        balance: state.balance,
                    });
                } else if (action.payload.amount > 0) {
                    return Object.assign({}, {
                        state: true,
                        msg: "SUCCESS",
                        balance: state.balance + action.payload.amount,
                    });
                } else {
                    return Object.assign({}, {
                        state: false,
                        msg: "The amount should be a positive number.",
                        balance: state.balance,
                    });
                }
            case 'WITHDRAW_FROM_ACCOUNT':
                if (false === Number.isFinite(action.payload.amount)) {
                    return Object.assign({}, {
                        state: false,
                        msg: "The amount should be a number.",
                        balance: state.balance,
                    });
                } else if (action.payload.amount > state.balance) {
                    return Object.assign({}, {
                        state: false,
                        msg: "The amount should not be greater than the balance.",
                        balance: state.balance
                    });
                }
                else if (action.payload.amount < 0) {
                        return Object.assign({}, {
                            state: false,
                            msg: "The amount should be a positive number.",
                            balance: state.balance
                        });
                } else {
                    return Object.assign({}, {
                        state: true,
                        msg: "SUCCESS",
                        balance: state.balance - action.payload.amount
                    });
                }
            default:
                return state;
        }
    }


}

export default new BankReducerStore(AppDispatcher);