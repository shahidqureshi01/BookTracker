import { combineReducers } from 'redux'

import { GET_POSTS } from '../actions'

function posts(state = {posts: null}, action) {
    switch(action.type){
    	case GET_POSTS:
        return action.posts
      default:
      	return state;
    }
}

export default combineReducers({
	posts
});