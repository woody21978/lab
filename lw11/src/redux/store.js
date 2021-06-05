import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    /* eslint-enable */
  )
);

export default store;
