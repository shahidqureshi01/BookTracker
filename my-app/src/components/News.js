import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NewsDetail from './NewsDetail'

class News extends Component {
  render() { 
    console.log('params',this.props)
    console.log('params2222',this.props)
    //const { posts } = this.props.posts.
    if(this.props.posts) {
      const posts = JSON.stringify(this.props.posts)
      return(
        <div>
          <div>{JSON.stringify(this.props.posts)}</div>
          <div>
            {this.props.posts && this.props.posts.map(p =>(
              <div key={p.id}>
                <Link to={`/newsDetail/${p.id}`}>
                  <h3>{p.title}</h3>
                </Link>
                <p>{p.body}</p>
              </div>
            ))}         
          </div>
        </div>
      )
    } else {
      return ( 
        <div>
          return ('<div>No posts...</div>')
        </div>
      )
    }
  }
}


export default News;
