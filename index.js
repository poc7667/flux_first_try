// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));

import {createStore} from 'redux';
import {changeAmount} from './redux/reducer';
import {deposit, withdraw} from './redux/actions';

let store = createStore(changeAmount, 1000);

let unsubscribe = store.subscribe(() => {
    console.log(store.getState()); 
});

store.dispatch(deposit(100));
store.dispatch(deposit(200));
store.dispatch(deposit(300));
store.dispatch(withdraw(50));
store.dispatch(withdraw(150));


unsubscribe();