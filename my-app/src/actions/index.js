export const GET_POSTS = 'GET_POSTS'
export const GET_COMMENTS = 'GET_COMMENTS'

export function getPosts(posts) {
	return {
		type: GET_POSTS,
		posts,
	}
}

export const fetchPosts = () => dispatch => (
	fetch(
 		'http://localhost:5001/posts', 
 		{ headers: { 'Authorization': 'JavaScript sucks' }})
	.then(response => {
		if(response.ok) {
			response.json().then(data => {
				dispatch(getPosts(data))
			})
		}	
	})
);