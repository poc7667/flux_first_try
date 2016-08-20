import React from 'react';
import BankActions from '../flux/BankActions';
import BankReducerStore from '../flux/BankReducerStore';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            balance: 0,
            isError: false,
            errMsg: ""
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
        var resp = BankReducerStore.getState();
        console.log(resp.balance);
        if (resp.state){
            this.setState({isError: false});
            this.setState({balance: resp.balance});
        }else{
            this.setState({isError: true});
            this.setState({errMsg: resp.msg});
        }
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
        var showError;
        if (this.state.isError) {
            showError = <h1 id="banner" className="error">{this.state.errMsg}</h1>;
        } else {
            showError = "";
        }

        return (
            <div>
                <header>UCSC Bank</header>
                <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
                {showError}
                {/*{JSON.stringify(this.state)}*/}
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