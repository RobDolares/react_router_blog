import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class PostList extends Component {
  constructor(props){
    super(props)

    this.state = {
      postlist: []
    }

  }

  componentDidMount() {

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/").then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          postlist:data
        });
        console.log("state", this.state.postlist);
      })
    }
  render() {

    const posts = this.state.postlist.map((post)=>{
      if (post.author) { //This is to filter the map so that it matches naming convention
        return (
          <div className="postlistSingle col-sm-6 col-sm-offset-3">
            <NavLink to={`/showposts/${post._id}`} key={post._id}>
              <div>
                {post.title}
              </div>
            </NavLink>
          </div>
        )
      }

    })
    return(
      <div id="postList">
        <h1>Recent Posts</h1>
        <h3>{posts}</h3>
      </div>
    )
  }
}
