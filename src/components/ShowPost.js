import React, { Component } from 'react';

import  { NavLink } from 'react-router-dom';


export default class ShowPost extends Component {
  constructor(props){
    super(props)

    this.state = {
      author:'',
      title:'',
      blog:''
    }

  }

  componentDidMount() {

    //used to fetch specific blog post that matches 'id'//
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

      fetch(URL).then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          author: data.author,
          title: data.title,
          blog: data.blog
        });
        console.log("state", this.state.name);
      })
    }


  render() {
    return(
      <div className="showPost col-sm-6 col-sm-offset-3">
        <h3>{this.state.title}</h3>
        <h4>{this.state.author}</h4>
        <div id="blogPostBody">
          {this.state.blog}
        </div>

          <NavLink to="/showposts"><button className="btn btn-lg col-sm-6 col-sm-offset-3" type="submit"><span>Back to List of Posts</span></button></NavLink>

      </div>
    )
  }
}
