import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { fetchPosts }  from '../actions'
import News from './News'
import NewsDetail from './NewsDetail'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {

	componentDidMount() {
		const { store } = this.props;
		this.props.fetchPosts()
	}

  render() { 
  	const { posts }  = this.props.store.getState()
  	if(posts) {console.log('getstate in app', this.props.store.getState())
	    return ( 
	      <div className="App">
	        <div className="App-header">
	          <h1>Readable App</h1>
	        </div>
	        <div>
	        	<Route exact path="/" 
	        		render = {() =>(
	        			<News posts={posts}/>
	        		)}
	   				/>
	        	<Route exact path="/newsDetail/:id"  component={NewsDetail} />
	        </div>
	      </div>
	    )
	  } else {
	  	return(<div>Fetching data</div>)
	  }
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchPosts())
	}
}

function mapStateToProps(state){
	return state.posts? {posts: state.posts} : {posts:[]} ;
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

