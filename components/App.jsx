import React from 'react';
import BankActions from '../flux/BankActions';
import BankReducerStore from '../flux/BankReducerStore';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            balance: 0
        };
    }

    componentDidMount() {
        this.storeSubscription = BankReducerStore.addListener(
            data => this.handleStoreChange()
        );
        BankActions.createAccount(1000);
    }
    
    componentWillUnmount() {
        this.storeSubscription.remove();
    }
    
    handleStoreChange() {
        this.setState({balance: BankReducerStore.getState()});
    }
    
    deposit() {
        BankActions.desposit(Number(this.amount.value));
        this.amount.value='';
    }
    
    withdraw() {
        BankActions.withdraw(Number(this.amount.value));
        this.amount.value='';
    }
    
    render() {
        return (
            <div>
                <header>UCSC Bank</header>
                <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Amount"
                        ref={(comp) => this.amount = comp}/>
                    <br/>
                    <button onClick={this.withdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.deposit.bind(this)}>Deposit</button>
                </div>
            </div>
        )
    }
}

export default App;