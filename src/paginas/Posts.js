import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
		console.log(posts);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`Posteos`}</h1>
        <div>
          {this.state.posts.map(post =>
		  <article key={post.id}>
            <h2>{post.title}</h2>
			<p>{post.body}</p>
		  </article>
		  )}
		</div>
		</div>
    );
  }
}

ReactDOM.render(
  <Posts subreddit="reactjs"/>,
  document.getElementById('root')
);

export default Posts;
