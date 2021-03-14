import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
// import App from './components/App/App';
import AppContainer from './containers/AppContainer';

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    /* eslint-enable */
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
