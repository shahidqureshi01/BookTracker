import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NewsDetail from './NewsDetail'

class News extends Component {
  render() { 
    console.log('params',this.props.params)
    const { posts } = this.props

    return ( 
      <div>
      	<div className="header">
          <h2>News 24</h2>
        </div>
        <div>
          {posts.map(p =>(
            <div key={p.id}>
              <Link to={`/newsDetail/${p.id}`}>
                <h3>{p.title}</h3>
              </Link>
              <p>{p.body}</p>
            </div>
          ))}        	
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.posts? {posts: state.posts} : {posts:[]} ;
}

export default connect(mapStateToProps)(News);
