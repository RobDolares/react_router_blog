import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props){
    super(props)

    this.state = {
      author: '',
      title: '',
      blog:''
    }

    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBlogChange = this.onBlogChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onAuthorChange(e) {
    e.preventDefault()
    this.setState({author: e.target.value})
  }

  onTitleChange(e) {
    e.preventDefault()
    this.setState({title: e.target.value})
  }

  onBlogChange(e) {
    e.preventDefault()
    this.setState({blog: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({author: e.target.value, title: e.target.value, blog: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response, "Fetch successful");

    })
    .then(this.props.history.push('/'))

    .catch(err => {
      console.log(err, 'There was an error');
    });
    this.setState({
      author: '',
      title: '',
      blog: ''
    });
  }

  render() {
    return(
      <div>
        <form className="col-sm-6 col-sm-offset-3" id="blog-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="author"><h3>Author:</h3></label>
            <input className="form-control" value={this.state.author} onChange={this.onAuthorChange} name="author" rows="1" type="text" placeholder="Enter your name"/>
          </div>

          <div className="form-group">
            <label htmlFor="title"><h3>Title:</h3></label>
            <input className="form-control" value={this.state.title} onChange={this.onTitleChange} name="title" rows="1" type="text" placeholder="Title of Post"/>
          </div>

          <div className="form-group">
            <label htmlFor="blog"><h3>Post:</h3></label>
            <textarea id="notes-input" form="blog-form" rows="5" className="form-control" type="text" value={this.state.blog} onChange={this.onBlogChange} name="blog" type="text" placeholder="What's on your mind?"></textarea>
          </div>

          <button id="form-btn" className="btn btn-lg col-xs-6 col-xs-offset-3" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}
