import React, { Component } from 'react';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    posts: []
  }
}  

componentDidMount() {
  const url = "https://jsonplaceholder/typicode.com/posts";
  fetch(url)
   .then(response => response.json())
   .then(json => this.setState({ posts: json }))
}
  render() {
    return (
      <p>Hello World!</p>
    );
  }
}
export default App;
