import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { fetchPosts }  from '../actions'
import News from './News'
import NewsDetail from './NewsDetail'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {

	componentDidMount() {
		const { store } = this.props;
		//console.log('store before fetch',store)
		store.dispatch(fetchPosts())
	}

  render() { 
  	const { posts }  = this.props.store.getState()
  	if(posts) {
	    return ( 
	      <div className="App">
	        <div className="App-header">
	          <h1>Readable App</h1>
	        </div>
	        <div>
	        	<Route exact path="/" component={News} />
	        	<Route exact path="/newsDetail/:id"  component={NewsDetail} />
	        </div>
	      </div>
	    )
	  } else {
	  	return(<div>Fetching data.... </div>)
	  }
  }
}

function mapStateToProps(state){
	return state.posts? {posts: state.posts} : {posts:[]} ;
}
export default withRouter(connect(mapStateToProps)(App));

