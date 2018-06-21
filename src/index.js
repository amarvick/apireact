import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPosts } from './actions'
// import rootReducer from './reducers'
import './index.css';
import { render } from 'react-dom';
import Root from './containers/Root'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware, // dispatch() functions
//         loggerMiddleware // logs actions
//     )
// )

// store.dispatch(selectSubreddit('reactjs'))
// store
//     .dispatch(fetchPosts('reactjs'))
//     .then(() => console.log(store.getState()))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
