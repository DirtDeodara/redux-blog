import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post !== action.payload) };
    default:
      return state;
  }
}


store.dispatch(createPost({ title: 'stuff', body: 'things and more things' }));
