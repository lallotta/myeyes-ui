import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import main_reducer from './reducers/reducer_index';
import App from './components/App.jsx';

// clean up default browser margins before React is rendered to the DOM
document.body.style.margin = 0;
document.body.style.backgroundColor = "#333333";



const store = createStore(main_reducer);

// for every update, return the state as it changes
store.subscribe(() => console.log(store.getState()))

//logs overall state object at the start
console.log(store.getState())

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('render-target'));