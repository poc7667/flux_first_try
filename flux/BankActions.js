import AppDispatcher from './Dispatcher';

let BankActions = {
    createAccount(amount) {
        AppDispatcher.dispatch({
            type: 'CREATE_ACCOUNT',
            payload: {
                amount: amount
            }
        });
    },
    
    desposit(amount) {
        AppDispatcher.dispatch({
            type: 'DEPOSIT_INTO_ACCOUNT',
            payload: {
                amount: amount
            }            
        });        
    },
    
    withdraw(amount) {
        AppDispatcher.dispatch({
            type: 'WITHDRAW_FROM_ACCOUNT',
            payload: {
                amount: amount
            }            
        });        
    },
}

export default BankActions;