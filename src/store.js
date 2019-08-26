import { createStore } from 'redux';
import reducer from '../src/reducers';
import {  createPost } from './actions/postActions';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createPost({ title: 'stuff', body: 'things and more things' }));


export default store;


