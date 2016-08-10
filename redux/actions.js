export function deposit(amount){
    return{
        type: 'DEPOSIT',
        payload: {
            amount: amount
        }
    }

}

export function withdraw(amount){
    return{
        type: 'WITHDRAW',
        payload: {
            amount: amount
        }
    }    

}