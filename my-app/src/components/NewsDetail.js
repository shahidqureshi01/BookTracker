import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import News from './News'

class NewsDetail extends Component {

  constructor(props) {
    super(props)
  }

  render() { 
    const id = this.props.match.params.id
    const post = this.props.posts.filter(p => p.id === id)
    if(post) {
      return ( 
        <div>
          <h2>{post[0].title}</h2>
          <div>{post[0].body}</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return state.posts? {posts: state.posts} : {posts:[]} ;
}

export default connect(mapStateToProps)(NewsDetail)
